import React, { useState } from 'react'
import Hero from './Hero';
import Feature from './Feature';
import Authors from '../components/Authors';
import Recommended from '../components/Recommended';
import { useParams } from 'react-router-dom';
import { Posts } from '../components/Posts';

const Home = ({catData}) => {

    const [displayCount, setDisplayCount] = useState(6); // Initial number of items to display

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 6); // Increase the display count by 4 when "Load More" is clicked
    };

    const cateData = catData || [];
    const params = useParams();

    return (
            <main className='global-main'>
                <div className="hero-section dark:bg-darkModeBlack">
                    <div className="hero-wrap">
                        <Hero />
                        <Feature />
                    </div>
                </div>
                <div class="loop-section global-padding">
                    <Authors />
                    <Posts singleCatData={cateData} params={params} displayCount={displayCount} setDisplayCount={setDisplayCount} handleLoadMore={handleLoadMore} />
                </div>
                {displayCount < cateData.length && (
                    <div class="pagination-section">
                        <a href="page/2.html" aria-label="Load more"></a>
                        <button class="global-button dark:bg-ghost-accent-color" onClick={handleLoadMore}>Load more</button>
                    </div>
                )}
                <Recommended />
            </main>
    )
}

export default Home