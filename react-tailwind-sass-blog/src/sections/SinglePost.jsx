import moment from 'moment';
import React from 'react'

const SinglePost = ({ singlePostData, id, slug }) => {

    const postArrayData = singlePostData[0];
    console.log(postArrayData)
    return (
        <article class="post-section">
            <div class="post-header dark:bg-darkModeBlack">
                <div class="post-header-wrap global-padding">
                    <div class="post-header-container">
                        <div class="post-header-content">
                            <div>
                                <div class="post-tags global-tags"><a href="/tag/lifestyle/">Lifestyle</a><a href="/tag/people/">People</a><a href="/tag/review/">Review</a></div>
                                <h1 class="post-title global-title dark:text-white">{postArrayData.title}</h1>
                                <p class="post-excerpt global-excerpt dark:text-white">{postArrayData.excerpt}</p>
                            </div>
                            <div class="post-meta">
                                <div class="post-authors global-authors">
                                    <div>
                                        <div class="post-item-author global-item-author is-image global-image">
                                            <a href="/author/nichole/" class="global-link" title="Nichole Becker"></a>
                                            <img src={postArrayData?.author_pic?.sizes?.thumbnail} loading="lazy" alt="Nichole Becker" />							
                                        </div>
                                
                                    </div>
                                </div>
                                <div class="post-meta-content">
                                    <a href="/author/nichole/" className=' dark:text-white'>{postArrayData.author}</a>
                                    <time datetime="2022-03-16" className=' dark:text-white'>{moment(postArrayData.date).format("LL")} — 4 minutes read</time>
                                </div>
                            </div>
                        </div>
                        <div class="post-header-image">
                            <figure>
                                <div class="global-image global-image-orientation global-radius">
                                    <img sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src={postArrayData?.featured_image?.medium_large} alt={postArrayData.title} title={postArrayData.title} />
                                </div>
                                {/* <figcaption>Photo by <a href="https://unsplash.com/@ncrediblet">Nick Wilkerson</a> / <a href="https://unsplash.com/?utm_source=ghost&amp;utm_medium=referral&amp;utm_campaign=api-credit">Unsplash</a></figcaption> */}
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="post-content global-padding  dark:text-white" dangerouslySetInnerHTML={{__html:postArrayData.content}} />
        </article>
    )
}

export default SinglePost