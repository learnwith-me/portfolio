import React from 'react'
import Posts, { SCategory } from '../components/Posts'
import { useParams } from 'react-router-dom';

const SingleCategory = ({catData}) => {

    // console.log(catData)

    const cateData = catData || [];
    const params = useParams();

    return (
        <>
        <div class="archive-section is-image dark:bg-darkModeBlack">
            <div class="archive-image global-image">
                <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fHJldmlld3xlbnwwfHx8fDE2MzgwMTg3MTU&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=2000" loading="lazy" alt="Review" />	</div>
            <h1 class="archive-title global-title is-tag dark:text-white">{params.slug}<span className=' dark:text-black'>9</span></h1>
            <p class="archive-excerpt global-excerpt dark:text-white">Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien.</p>
        </div>
        <div className='loop-section global-padding'>
            <div class="global-subtitle">
                <small class="global-subtitle-title">
                Check out the <span>latest posts</span></small>
            </div>
            <SCategory singleCatData={cateData} params={params} />
        </div>
        </>
    )
}

export default SingleCategory