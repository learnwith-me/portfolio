import React, { useState } from 'react';
import post1 from '../assets/img/p1.jpg';
import post2 from '../assets/img/p2.jpg';
import post3 from '../assets/img/p3.jpg';
import post4 from '../assets/img/p4.jpg';
import post5 from '../assets/img/p5.jpg';
import post6 from '../assets/img/p6.jpg';
import post7 from '../assets/img/p7.jpg';
import post8 from '../assets/img/p8.jpg';
import { Link } from 'react-router-dom';

export const Posts = ({ singleCatData, params, displayCount, setDisplayCount, handleLoadMore }) => {

    

    return (
        <div class="loop-wrap">

            {
                singleCatData.slice(0, displayCount).map((catItem, index) => {
                    return (
                        
                        <article key={index} class="item is-loop is-image">
                            <div
                                class="item-image global-image global-image-orientation global-radius is-landscape"
                            >
                                <Link to={`/singlepost/${catItem.id}/${catItem.slug}`} className='global-link'></Link>
                                <img
                                    sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                    src={catItem.featured_image.medium_large}
                                    loading="lazy"
                                    alt=""
                                />
                                <div class="item-authors global-authors">
                                    <div>
                                        <div
                                            class="item-author global-item-author is-image global-image"
                                        >
                                            <a
                                                href="author/nichole.html"
                                                class="global-link"
                                                title="Nichole Becker"
                                            ></a>
                                            <img
                                                src="content/images/size/w300/2022/03/joshua-oyebanji-kMC1v6rBHMI-unsplash-2.jpg"
                                                loading="lazy"
                                                alt="Nichole Becker"
                                            />
                                        </div>
                                        <div
                                            class="item-author global-item-author is-image global-image"
                                        >
                                            <a
                                                href="author/daryl.html"
                                                class="global-link"
                                                title="Daryl Wehner"
                                            ></a>
                                            <img
                                                src="content/images/size/w300/2022/03/kazi-mizan-ItjRqGiei5g-unsplash.jpg"
                                                loading="lazy"
                                                alt="Daryl Wehner"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="item-content">
                                <div class="item-tags global-tags">
                                    <a href="tag/lifestyle.html">Lifestyle</a><span ><a href="tag/people.html">People</a ><a href="tag/review.html">Review</a></span>
                                </div>
                                <h2 class="item-title dark:text-darkModeTextColor">
                                    <Link to={`/singlepost/${catItem.id}/${catItem.slug}`} className='dark:text-darkModeTextColor'>
                                        {catItem.title}
                                    </Link>
                                </h2>
                                <p class="item-excerpt dark:text-darkModeTextColor">
                                    {catItem.excerpt}
                                </p>
                            </div>
                        </article>
                                
                    )
                })}
                
        </div>
    )
}


export const SCategory = ({ singleCatData, params }) => {

    console.log(singleCatData)

    return (
        <div class="loop-wrap">

            {
                singleCatData.map((catItem, index) => {
                    return (
                        catItem.categories.map((cats, index) => {
                            if(params.slug == cats.slug) {
                                console.log(catItem)
                                return (
                                    <article key={index} class="item is-loop is-image">
                                        <div
                                            class="item-image global-image global-image-orientation global-radius is-landscape"
                                        >
                                            <Link class="global-link" to={`/singlepost/${catItem.id}/${catItem.slug}`}></Link>
                                            <img
                                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                                src={catItem.featured_image.medium_large}
                                                loading="lazy"
                                                alt=""
                                            />
                                            <div class="item-authors global-authors">
                                                <div>
                                                    <div
                                                        class="item-author global-item-author is-image global-image"
                                                    >
                                                        <a
                                                            href="author/nichole.html"
                                                            class="global-link"
                                                            title="Nichole Becker"
                                                        ></a>
                                                        <img
                                                            src="content/images/size/w300/2022/03/joshua-oyebanji-kMC1v6rBHMI-unsplash-2.jpg"
                                                            loading="lazy"
                                                            alt="Nichole Becker"
                                                        />
                                                    </div>
                                                    <div
                                                        class="item-author global-item-author is-image global-image"
                                                    >
                                                        <a
                                                            href="author/daryl.html"
                                                            class="global-link"
                                                            title="Daryl Wehner"
                                                        ></a>
                                                        <img
                                                            src="content/images/size/w300/2022/03/kazi-mizan-ItjRqGiei5g-unsplash.jpg"
                                                            loading="lazy"
                                                            alt="Daryl Wehner"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="item-content">
                                            <div class="item-tags global-tags">
                                                <a href="tag/lifestyle.html">Lifestyle</a><span ><a href="tag/people.html">People</a ><a href="tag/review.html">Review</a></span>
                                            </div>
                                            <h2 class="item-title dark:text-darkModeTextColor">
                                                <Link to=''>
                                                    {catItem.title}
                                                </Link>
                                            </h2>
                                            <p class="item-excerpt dark:text-darkModeTextColor">
                                                {catItem.excerpt}
                                            </p>
                                        </div>
                                    </article>
                                )
                            }
                        }
                        )
                    )
                })}
        </div>
    )
}