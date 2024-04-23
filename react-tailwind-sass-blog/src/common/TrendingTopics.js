import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { FetchCategoriesData } from '../api/FetchCategoriesData'

const TrendingTopics = ({ FetchCategoriesData, CategoryReducer, onCategoryClick, loading, error }) => {

    useEffect(() => {
        FetchCategoriesData("categories");
    }, [])

    return (
        <>
            <h2 className=' text-center mb-12 dark:text-white'>Trending Topics</h2>
            <div className='rounded-[150px] border-[1px] border-[#E9E8FF] dark:border-[#373737] max-w-[960px] mx-auto epcl-popular-categories'>
                <div className=' p-[20px]'>
                    <div className=' grid grid-cols-16.6%'>
                        {
                            loading ? (
                                <p>Loading</p>
                            ) : error ? (
                                <p>Error1</p>
                            ) : CategoryReducer.catData && Array.isArray(CategoryReducer.catData) ? (
                                CategoryReducer.catData
                                    .slice() // Create a copy of the array to avoid mutating the original
                                    .sort((a, b) => b.count - a.count) // Sort categories by count in descending order
                                    .map((category, idx) => (
                                        <div className='item overlay-effect cursor-pointer' key={idx} onClick={() => onCategoryClick(category.slug)}>
                                            <div className={`inline-block relative image-container ctag-${idx}`}>
                                                <span className={`category-image ctag ctag-${idx}`}>
                                                    <img fetchpriority="low" decoding="async" loading="lazy" src={category.acf.category_image.url} alt="HTML" className="cover" />
                                                </span>
                                                <span className="epcl-decoration-counter">{category.count}</span>
                                                <span className="overlay"></span>
                                            </div>
                                            <div className="title usmall dark:text-white">
                                                {category.name}
                                            </div>
                                        </div>
                                    ))

                            ) : (
                                <p></p>
                            )
                        }
                    </div>
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

export default connect(mapStateToProps, { FetchCategoriesData })(TrendingTopics);