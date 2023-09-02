import React, { useEffect, useState } from 'react'
import SingleCategory from '../sections/SingleCategory'
import { useParams } from 'react-router-dom';
import { FetchData } from '../config/BaseApi';

const CategoryContainer = () => {

	const [data, setData] = useState(null);
	// const [loading, setLoading] = useState(false);
	const {id} = useParams();

	// console.log("PARAM", id)

	useEffect(()=> {
		// showLoader();
		// fetch('https://harshadpatil.com/wp-backend/wp-json/wc/w3/posts')
		FetchData('posts')
		.then(setData)
		.catch(console.error);
		// hideLoader();
		// console.log("setData", setData)
	}, []);

	if (data) {
		return (
			<main class="global-main">
				<SingleCategory catData={data.data} />
			</main>
		)
	}
}

export default CategoryContainer