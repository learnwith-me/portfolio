import React, { useEffect, useState } from 'react'
import SinglePost from '../sections/SinglePost'
import { useParams } from 'react-router-dom';
import { FetchData } from '../config/BaseApi';

const SinglePostContainer = () => {

    const [singlePostData, setSinglePostData] = useState(null)
        const {slug} = useParams();
        const {id} = useParams();
        // const [loader, showLoader, hideLoader] = useFullPageLoader(); 

        useEffect(() => {
            // FetchPostSingleData(data, id);
            // showLoader()
            // fetch('https://harshadpatil.com/wp-backend/wp-json/wc/w3/posts?id='+id+'?slug'+slug)
            FetchData('posts?id='+id+'?slug'+slug)
			.then(setSinglePostData)
			.catch(console.error)
            // hideLoader();
        }, [])
        
        
        if (singlePostData) {  

            const singlePostDataOne = singlePostData.data || {};

            return (
                <main className="global-main">
                    <SinglePost singlePostData={singlePostDataOne} slug={slug} id={id} />
                </main>
            )
        }
}

export default SinglePostContainer