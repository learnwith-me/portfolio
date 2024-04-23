import React, { useState } from 'react';
import Categories from '../categories/Categories';
import Posts from '../posts/Posts';



const Home = ({ catData }) => {
    const [selectedCategory, setSelectedCategory] = useState(null),
        [displayCount, setDisplayCount] = useState(6); // Initial number of items to display

    const handleLoadMore = () => {
        setDisplayCount(displayCount + 6); // Increase the display count by 6 when "Load More" is clicked
    };

    const handleCategoryClick = (categorySlug) => {
        setSelectedCategory(categorySlug);
    };

    return (
        <main className='global-main'>
            <div className='global-padding dark:bg-darkModeBlack pb-[50px]'>

            </div>
            <div className='global-padding dark:bg-darkModeBlack pb-[50px]'>
                <Categories onCategoryClick={handleCategoryClick} />
            </div>

            <div className="loop-section global-padding dark:bg-darkModeBlack !mb-0">
                <Posts
                    displayCount={displayCount}
                    handleLoadMore={handleLoadMore}
                    selectedCategory={selectedCategory}
                />
            </div>
        </main>
    );
};

export default Home;
