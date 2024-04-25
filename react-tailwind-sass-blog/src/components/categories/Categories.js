import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchCategoriesData } from '../../api/FetchCategoriesData';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Categories = ({ FetchCategoriesData, CategoryReducer, onCategoryClick, loading, error }) => {

    useEffect(() => {
        FetchCategoriesData("categories");
    }, [])

    // Settings for the slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, // Desktop
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Mobile
                    slidesToScroll: 3,
                }
            }
        ]
    };

    return (
        <>
            <h2 className=' text-center mb-12 dark:text-white flex justify-center items-center gap-2'>
                <svg className='icon large secondary-color' xmlns="http://www.w3.org/2000/svg" id="trending-icon" viewBox="0 0 24 24">
                    <path fill="#1F1B1B" d="m6.67 7.914 3.062-4.143C11.71 1.093 12.7-.246 13.624.037c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363 2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734-.923-.283-.923-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z" />
                    <path fill="currentColor" d="m5.67 7.914 3.062-4.143C10.71 1.093 11.7-.246 12.624.037c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363 2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734-.923-.283-.923-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z" />
                </svg>
                Trending Topics
            </h2>
            <div className='md:rounded-[150px] border-b-[1px] md:border-[1px] border-[#E9E8FF] dark:border-[#373737] max-w-[960px] mx-auto epcl-popular-categories'>
                <div className=' p-[20px]'>
                    <Slider {...settings}>
                        {
                            CategoryReducer.catData && Array.isArray(CategoryReducer.catData) &&
                            CategoryReducer.catData
                                .slice() // Create a copy of the array to avoid mutating the original
                                .sort((a, b) => b.count - a.count) // Sort categories by count in descending order
                                .map((category, idx) => (
                                    <div className='item overlay-effect cursor-pointer' key={idx} onClick={() => onCategoryClick(category.slug)}>
                                        <div className={`inline-block relative image-container ctag-${idx}`}>
                                            <span className={`category-image ctag ctag-${idx}`}>
                                                <img fetchpriority="low" decoding="async" loading="lazy" src={category.acf.category_image.url} alt="HTML" className="cover" />
                                            </span>
                                            <span className="epcl-decoration-counter dark:!bg-white dark:!text-black">{category.count}</span>
                                            <span className="overlay"></span>
                                        </div>
                                        <div className="title usmall dark:text-white">
                                            {category.name}
                                        </div>
                                    </div>
                                ))


                        }
                    </Slider>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    CategoryReducer: state.CategoryReducer,
    loading: state.CategoryReducer.loading,
    error: state.CategoryReducer.error,
})

export default connect(mapStateToProps, { FetchCategoriesData })(Categories);
