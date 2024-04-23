import React, { useState } from 'react';
import TechPosts from '../components/posts/TechPosts';
import TrendingTopics from '../common/TrendingTopics';

const Home = ({ catData }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [displayCount, setDisplayCount] = useState(6); // Initial number of items to display

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 6); // Increase the display count by 6 when "Load More" is clicked
    };

    const handleCategoryClick = (categorySlug) => {
        setSelectedCategory(categorySlug);
        console.log('Selected Category:', categorySlug);
    };

    return (
        <main className='global-main'>
            <div className='global-padding dark:bg-darkModeBlack pb-[50px]'>
                <TrendingTopics onCategoryClick={handleCategoryClick} />
            </div>

            <div className="loop-section global-padding dark:bg-darkModeBlack !mb-0">
                <TechPosts
                    displayCount={displayCount}
                    handleLoadMore={handleLoadMore}
                    selectedCategory={selectedCategory}
                />
            </div>
        </main>
    );
};

export default Home;
