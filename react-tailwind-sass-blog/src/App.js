import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CategoryContainer from "./containers/CategoryContainer";
import Nav from "./sections/Nav";
import TopSearch from "./components/TopSearch";
import Footer from "./sections/Footer";
import SinglePostContainer from "./containers/SinglePostContainer";
import DocumentContainer from "./containers/DocumentContainer";

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

	return ( 
		<>
			<Nav openSearch={openSearch} />
			<Routes>
				<Route path="/" exact element={<HomeContainer />} />
				<Route path="/category/:slug"  element={<CategoryContainer />} />
				<Route path="/singlepost/:id/:slug"  element={<SinglePostContainer />} />
				<Route path="/doc"  element={<DocumentContainer />} />
			</Routes>
			<Footer />
			<TopSearch isSearchVisible={isSearchVisible} openSearch={openSearch} />
		</>
	);
}

export default App;