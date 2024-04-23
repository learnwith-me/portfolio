import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FetchPosts } from '../../api/FetchData';

const TechPosts = ({ FetchPosts, PostReducer, loading, error, displayCount, handleLoadMore, selectedCategory }) => {
    useEffect(() => {
        FetchPosts("posts");
    }, []);

    const filteredPosts = selectedCategory
        ? PostReducer.data.filter(post => post.categories.some(category => category.slug === selectedCategory))
        : PostReducer.data;

    return (
        <>
            {loading ? (
                <div className="loaders absolute top-0 left-0 right-0 bottom-0 w-full z-10 overflow-hidden bg-black opacity-80 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                    <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
                </div>
            ) : error ? (
                <p>Error1</p>
            ) : (
                <div className="loop-wrap !mb-0">
                    {filteredPosts.slice(0, displayCount).map((post, idx) => (
                        <article key={idx} className="item is-loop is-image">
                            <div className="item-image global-image global-image-orientation global-radius is-landscape">
                                <Link to={`/singlepost/${post.id}/${post.slug}`} className="global-link"></Link>
                                <img
                                    sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                    src={post.featured_image.medium_large}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <div className="item-content">
                                <h2 className="item-title dark:text-darkModeTextColor">
                                    <Link to={`/singlepost/${post.id}/${post.slug}`} className="dark:text-darkModeTextColor">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="item-excerpt dark:text-darkModeTextColor">{post.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            )}

            {displayCount < filteredPosts.length && (
                <div className="pagination-section dark:bg-darkModeBlack">
                    <button className="global-button dark:bg-ghost-accent-color" onClick={handleLoadMore}>Load more</button>
                </div>
            )}
        </>
    );
};

const mapStateToProps = (state) => ({
    PostReducer: state.PostReducer,
    loading: state.PostReducer.loader,
    error: state.PostReducer.error,
});

export default connect(mapStateToProps, { FetchPosts })(TechPosts);
