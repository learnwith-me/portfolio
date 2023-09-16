import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CategoryContainer from "./containers/CategoryContainer";
import Nav from "./sections/Nav";
import TopSearchUi from "./components/search/TopSearchUi";
import Footer from "./sections/Footer";
import SinglePostContainer from "./containers/SinglePostContainer";
import DocumentContainer from "./containers/DocumentContainer";
import SearchContainer from "./containers/SearchContainer";
import AboutUs from "./sections/AboutUs";
import MyPassion from "./sections/MyPassion";

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
			  })
			  .catch((error) => {
				console.error('Error fetching data:', error);
				if (retries > 0) {
				  // Retry the request after a delay (e.g., 1 second)
				  setTimeout(() => {
					fetchData();
					retries--;
				  }, 1000); // Adjust the delay as needed
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
			<Nav openSearch={openSearch} />
			<Routes>
				<Route path="/" exact element={<HomeContainer />} />
				<Route path="about-me" exact element={<AboutUs />} />
				<Route path="my-passion" exact element={<MyPassion /> } />
				<Route path="/category/:slug"  element={<CategoryContainer />} />
				<Route path="/singlepost/:id/:slug"  element={<SinglePostContainer />} />
				<Route path="/doc"  element={<DocumentContainer />} />
				<Route path="/search"  element={<SearchContainer searchResults={searchResults} />} />
			</Routes>
			<Footer />
			<TopSearchUi isSearchVisible={isSearchVisible} openSearch={openSearch} searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
		</>
	);
}

export default App;