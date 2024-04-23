import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FetchPosts } from '../../api/FetchPosts';
import moment from 'moment';
import SideBar from '../layout/SideBar';

const SinglePost = ({ FetchPosts, PostReducer, error, loading }) => {
    const { slug, id } = useParams();

    useEffect(() => {
        FetchPosts(`posts?id=${id}&slug=${slug}`);
    }, [id, slug]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Find the post with matching id and slug
    const postData = PostReducer.data.find(post => post.id === parseInt(id, 10) && post.slug === slug);

    return (
        <>

            {loading ? (
                <div className="loaders absolute top-0 left-0 right-0 bottom-0 w-full z-[5] overflow-hidden bg-black opacity-80 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">Loadingazd...</h2>
                    <p className="w-1/3 text-center text-white hidden md:block ">This may take a few seconds, please don't close this page.</p>
                </div>
            ) : error ? (
                <p>Error1</p>
            ) : (

                <article className="post-section">
                    {postData ? (
                        <div className="post-header dark:bg-darkModeBlack">
                            <div className="post-header-wrap global-padding">
                                <div className="post-header-container !pb-0">
                                    <div className="post-header-content !max-w-full">
                                        <div>
                                            {postData.categories && postData.categories.length > 0 && (
                                                <div className="post-tags global-tags">
                                                    <Link className='cursor-pointer' to={`/category/${postData.categories[0].slug}`}>
                                                        {postData.categories[0].cat_name}
                                                    </Link>
                                                </div>
                                            )}
                                            <h1 className="post-title global-title dark:text-white">{postData.title}</h1>
                                            <p className="post-excerpt w-full dark:text-white">{postData.excerpt}</p>
                                        </div>
                                        <div className="post-meta">
                                            <div className="post-authors global-authors">
                                                <div>
                                                    <div className="post-item-author global-item-author is-image global-image">
                                                        <a href="#" className="global-link" title=""></a>
                                                        <img src={postData?.author_pic?.sizes?.thumbnail} loading="lazy" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="post-meta-content">
                                                <a href="#" className=' dark:text-white'>{postData.author}</a>
                                                <time className=' dark:text-white'>{moment(postData.date).format("LL")} — 4 minutes read</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}

                    <div className='grid grid-cols-100 md:grid-cols-70/30 pt-[30px] dark:bg-darkModeBlack'>
                        <div className='post-content global-padding'>
                            {postData?.youtube_link && (
                                <iframe className='youtube-vdo' width="560" height="315" src={`https://www.youtube.com/embed/${postData?.youtube_link}`} title={postData.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            )}
                            <div className="dark:bg-darkModeBlack  dark:text-white" dangerouslySetInnerHTML={{ __html: postData?.content }} />
                        </div>
                        <SideBar />
                    </div>
                </article>

            )}
        </>
    );

};

const mapStateToProps = (state) => ({
    PostReducer: state.PostReducer,
    loading: state.PostReducer.loader,
    error: state.PostReducer.error,
});

export default connect(mapStateToProps, { FetchPosts })(SinglePost);
