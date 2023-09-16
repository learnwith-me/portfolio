import React, { useEffect, useState } from 'react'
import Posts, { SCategory } from '../components/Posts'
import { useParams } from 'react-router-dom';
import { FetchCategory } from '../config/BaseApi';

const SingleCategory = ({catData}) => {

    // console.log("asd ",catData)

    const cateData = catData || [];
    const params = useParams();
    const matchingCategories = catData.flatMap((catItem) =>
    catItem.categories.filter((cats) => params.slug === cats.slug)
    );

    const [categoryLabel, setCategoryLabel] = useState(null);

    useEffect(() => {
        FetchCategory('categories')
            .then(setCategoryLabel)
            .catch(console.error);
    }, []);

    // console.log(params.slug)
    if (categoryLabel) {
        const catLabel = categoryLabel.data || {};
        return (
            <>
            {
                catLabel.map((catItems, index) => {
                   
                    if(params.slug == catItems.slug) {
                        console.log("CATIR ",catItems);
                        return (
                            <div key={index} className="archive-section is-image dark:bg-darkModeBlack">
                                <div className="archive-image global-image">
                                    <img src={catItems?.acf?.category_image?.url} loading="lazy" alt="Review" />	</div>
                                <h1 className="archive-title global-title is-tag dark:text-white">{catItems.name}
                                    
                                    <span className=' dark:text-black'>{matchingCategories.length}</span>
                                
                                </h1>
                                <p className="archive-excerpt global-excerpt dark:text-white">
                                    {catItems.description}
                                </p>
                            </div>
                        )
                    }
                })
            }
            <div className='loop-section global-padding dark:bg-darkModeBlack !mb-0'>
                <div className="global-subtitle !mb-0">
                    <small className="global-subtitle-title dark:text-white">
                    Check out the <span>latest posts</span></small>
                </div>
                <SCategory singleCatData={cateData} params={params} />
            </div>
            </>
        )
    }
}

export default SingleCategory