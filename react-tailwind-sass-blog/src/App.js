import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import TopSearchUi from "./components/search/TopSearchUi";
import SingleTechPost from "./components/posts/SinglePost";
import SingleCatgory from "./components/categories/SingleCatgory";
import SearchContainer from "./components/search/SearchContainer";
import Nav from "./components/layout/Nav";
import Footer from './components/layout/Footer';
import AboutUs from './components/pages/AboutUs';
import MyPassion from './components/pages/MyPassion';
import Home from './components/pages/Home';
import SingleCourse from "./components/courses/SingleCourse";

function App() {

	const [isSearchVisible, setSearchVisible] = useState(false);

	const openSearch = () => {
		setSearchVisible(!isSearchVisible)
		if (!isSearchVisible) {
			document.body.classList.add('search-is-active');
			document.getElementById('isSearchVisible').classList.add('display-block');
			document.body.classList.remove('search-no-active');
		} else {
			document.body.classList.remove('search-is-active');
			document.body.classList.add('search-no-active');
		}
	}

	const focusField = useRef(null);

	const handleFocusField = (e) => {
		focusField.current.focus();
	}

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const navigate = useNavigate(); // Initialize navigate
	const apiUrl = 'https://harshadpatil.com/wp-backend/wp-json/wc/w3/search';

	useEffect(() => {
		let retries = 3; // Number of retries allowed
		const fetchData = () => {
			if (searchQuery) {
				// Fetch data from the API based on the search query
				fetch(`${apiUrl}?search=${searchQuery}`)
					.then((response) => response.json())
					.then((data) => {
						setSearchResults(data);
						openSearch(); // Call openSearch after setting the search results
						setSearchQuery('');
					})
					.catch((error) => {
						console.error('Error fetching data:', error);
						if (retries > 0) {
							// Retry the request after a delay (e.g., 1 second)
							setTimeout(() => {
								fetchData();
								retries--;
							}, 2000); // Adjust the delay as needed
						} else {
							// No more retries, handle the error or display a message to the user
							console.error('Maximum retries reached. Unable to fetch data.');
						}
					});
				// Navigate to /search page when searchQuery is not empty
				navigate('/search');

			} else {
				// Clear search results if the search query is empty
				setSearchResults([]);
			}
		};

		fetchData(); // Initial fetch

	}, [searchQuery]);


	const handleSearchChange = (event) => {
		setSearchQuery(event.target.value);
	};

	return (
		<>
			<Nav openSearch={openSearch} handleFocusField={handleFocusField} />
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/about-me" exact element={<AboutUs />} />
				<Route path="/my-passion" exact element={<MyPassion />} />
				<Route path="/category/:slug" element={<SingleCatgory />} />
				<Route path="/singlepost/:id/:slug" element={<SingleTechPost />} />
				<Route path="/course/:slug" element={<SingleCourse />} />
				<Route path="/search" element={<SearchContainer searchResults={searchResults} />} />
			</Routes>
			<Footer />
			<TopSearchUi isSearchVisible={isSearchVisible} openSearch={openSearch} searchQuery={searchQuery} handleSearchChange={handleSearchChange} focusField={focusField} />
		</>
	);
}

export default App;