import React, { useState } from 'react'
import Hero from './Hero';
import Recommended from '../components/Recommended';
import { useParams } from 'react-router-dom';
import TechPosts from '../components/posts/TechPosts';
import TrendingTopics from '../common/TrendingTopics';

const Home = ({ catData }) => {

    const [displayCount, setDisplayCount] = useState(6); // Initial number of items to display

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 6); // Increase the display count by 4 when "Load More" is clicked
    };

    const cateData = catData || [];
    const params = useParams();

    return (
        <main className='global-main'>
            {/* <div className="hero-section dark:bg-darkModeBlack">
                <div className="hero-wrap">
                     <Hero /> 
                     <Feature /> 
                </div>
            </div> */}
            <div className='global-padding dark:bg-darkModeBlack'>
                <TrendingTopics></TrendingTopics>
            </div>

            <div className="loop-section global-padding dark:bg-darkModeBlack !mb-0">

                <TechPosts displayCount={displayCount} handleLoadMore={handleLoadMore}></TechPosts>
                {/* <Posts singleCatData={cateData} params={params} displayCount={displayCount} setDisplayCount={setDisplayCount} handleLoadMore={handleLoadMore} /> */}
            </div>

            {/* <Recommended /> */}
        </main>
    )
}

export default Home