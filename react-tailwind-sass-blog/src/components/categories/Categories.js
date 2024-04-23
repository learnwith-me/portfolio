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
            <h2 className=' text-center mb-12 dark:text-white'>Trending Topics</h2>
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
