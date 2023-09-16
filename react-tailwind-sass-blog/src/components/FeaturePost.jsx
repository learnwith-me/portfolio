import React, { useEffect, useState, Fragment } from "react";
import { FetchData } from "../config/BaseApi";

export const FeaturedPost = () => {

		const [data, setData] = useState(null);
        const [numberOfPost, setNumberOfPost] = useState(10);

		useEffect(()=> {
            FetchData('posts')
			.then(setData)
			.catch(console.error);
		}, []);

		if (data) {
			// console.log("HOME",data)
            const slice = data.data.slice(0, numberOfPost)

			return (
                        <div className='home mt-20'>
                            <h3 className="font-normal text-left uppercase tracking-loose-one mb-10 dark:text-white">Featured Posts</h3>
                            <div className="posts">
                                {
                                    slice.map((items, index) => {
                                        // console.log("items.categories",items)
                                        return (
                                            <a href={`/singlepost/${items.id}/${items.slug}`} key={index} aria-label="Feature Post" className=" grid grid-cols-20/80 text-left gap-2 space-y-10 hover:underline dark:decoration-white border-b last-of-type:border-none border-[#f1f1f1] dark:border-[#373737] pb-[10px] mb-[12px]" style={{height:''}}>
                                                
                                                    <img className="" style={{width:'50px', height:'50px'}} src={items.featured_image.medium_large} />
                                                
                                                
                                                    <div className=" text-[16px] group-hover:underline !mt-0 dark:text-white">{items.title}</div>
                                            </a>  
                                        )
                                    })
                                }
                            </div>
                        </div>
			);
		}
}



export default FeaturedPost;