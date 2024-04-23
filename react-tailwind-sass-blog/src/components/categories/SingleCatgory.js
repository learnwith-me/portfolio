import React, { useEffect } from 'react';
import { FetchPosts } from '../../api/FetchPosts';
import { FetchCategoriesData } from '../../api/FetchCategoriesData';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ListOfSingleCategory } from './ListOfSingleCategory';

const SingleCategory = ({
    PostReducer,
    CategoryReducer,
    FetchPosts,
    FetchCategoriesData,
    loading,
    error
}) => {

    const params = useParams(),
        matchingCategories = PostReducer.data ? PostReducer.data.filter((catItem) => params.slug === catItem.categories[0].slug) : [],
        matchingCategory = CategoryReducer.catData.find(catItem => catItem.slug === params.slug);

    useEffect(() => {
        FetchPosts('posts');
    }, [FetchPosts]);
    useEffect(() => {
        FetchCategoriesData('categories');
    }, [FetchCategoriesData]);

    return (
        <>
            {matchingCategory && (
                <div className="archive-section is-image dark:bg-darkModeBlack">
                    <div className="archive-image global-image">
                        <img src={matchingCategory?.acf?.category_image?.url} loading="lazy" alt="Review" />
                    </div>
                    <h1 className="archive-title global-title is-tag dark:text-white">{matchingCategory.name}
                        <span className=' dark:text-black'>{matchingCategories.length}</span>
                    </h1>
                    <p className="archive-excerpt global-excerpt dark:text-white">
                        {matchingCategory.description}
                    </p>
                </div>
            )}

            <div className='loop-section global-padding dark:bg-darkModeBlack !mb-0'>
                <div className="global-subtitle !mb-0">
                    <small className="global-subtitle-title dark:text-white">
                        Check out the <span>latest posts</span></small>
                </div>
                <ListOfSingleCategory singleCatData={PostReducer.data} params={params} />
            </div>
        </>
    );
};

const mapStateToProps = (state) => ({
    PostReducer: state.PostReducer,
    CategoryReducer: state.CategoryReducer,
    loading: state.PostReducer.loader,
    error: state.PostReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
    FetchPosts: (arg) => dispatch(FetchPosts(arg)),
    FetchCategoriesData: (arg) => dispatch(FetchCategoriesData(arg)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCategory);
