import React, { useEffect, useState } from 'react'
import Home from '../sections/Home'
import { useParams } from 'react-router-dom';
import { FetchData } from '../config/BaseApi';

const HomeContainer = () => {

  const [data, setData] = useState(null);
	// const [loading, setLoading] = useState(false);
	const {id} = useParams();

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
            <Home catData={data.data} />
        )
    }
}

export default HomeContainer