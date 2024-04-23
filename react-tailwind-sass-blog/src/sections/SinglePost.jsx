import moment from 'moment';
import React from 'react'
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

const SinglePost = ({ singlePostData, id, slug }) => {

    console.log(singlePostData);

    const postArrayData = singlePostData[0];
    console.log(postArrayData)
    return (
        <article className="post-section">
            <div className="post-header dark:bg-darkModeBlack">
                <div className="post-header-wrap global-padding">
                    <div className="post-header-container !pb-0">
                        <div className="post-header-content !max-w-full">
                            <div>
                                <div className="post-tags global-tags"><Link to={`/category/${postArrayData.categories[0].slug}`}>{postArrayData.categories[0].cat_name}</Link></div>
                                <h1 className="post-title global-title dark:text-white">{postArrayData.title}</h1>
                                <p className="post-excerpt w-full dark:text-white">{postArrayData.excerpt}</p>
                            </div>
                            <div className="post-meta">
                                <div className="post-authors global-authors">
                                    <div>
                                        <div className="post-item-author global-item-author is-image global-image">
                                            <a href="#" className="global-link" title=""></a>
                                            <img src={postArrayData?.author_pic?.sizes?.thumbnail} loading="lazy" alt="" />
                                        </div>

                                    </div>
                                </div>
                                <div className="post-meta-content">
                                    <a href="#" className=' dark:text-white'>{postArrayData.author}</a>
                                    <time className=' dark:text-white'>{moment(postArrayData.date).format("LL")} — 4 minutes read</time>
                                </div>
                            </div>
                        </div>
                        {/* <div className="post-header-image">
                            <figure>
                                <div className="global-image global-image-orientation global-radius">
                                    <img sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src={postArrayData?.featured_image?.medium_large} alt={postArrayData.title} title={postArrayData.title} />
                                </div>
                               
                            </figure>
                        </div> */}
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-100 md:grid-cols-70/30 pt-[30px] dark:bg-darkModeBlack'>
                <div className='post-content global-padding'>
                    {postArrayData?.youtube_link &&
                        <iframe className='youtube-vdo' width="560" height="315" src={`https://www.youtube.com/embed/${postArrayData?.youtube_link}`} title={postArrayData.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    }
                    <div className="dark:bg-darkModeBlack  dark:text-white" dangerouslySetInnerHTML={{ __html: postArrayData.content }} />
                </div>
                <SideBar />
            </div>
        </article>
    )
}

export default SinglePost