
import React, { useEffect, useState } from 'react'
import Flickity from 'react-flickity-component'


import "flickity/css/flickity.css";
import { FetchCategory } from '../config/BaseApi'
import { Link } from 'react-router-dom'

const flickityOptions = {
    initialIndex: 1
}

const Feature = () => {

    const [categoryLabel, setCategoryLabel] = useState(null);

    useEffect(() => {
        FetchCategory('categories')
            .then(setCategoryLabel)
            .catch(console.error);
    }, []);

    if (categoryLabel) {
        const catLabel = categoryLabel.data || {};
        return (
            <div className="featured-section">
                <div className="global-padding">
                    <div className="featured-subtitle global-subtitle">
                        <small className="global-subtitle-title dark:text-darkModeTextColor"
                        >Get started with our <span>best stories</span></small
                        >
                        {/* <div className="featured-navigation">
                            <button
                                className="featured-btn-previous "
                                aria-label="Previous"
                            >
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.775 3.225 0 12l8.775 8.775 1.498-1.407-6.421-6.267H24v-2.202H3.852l6.421-6.267-1.498-1.407Z"
                                    />
                                </svg>
                            </button>
                            <button className="featured-btn-next" aria-label="Next">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.225 20.775 24 12l-8.775-8.775-1.498 1.407 6.421 6.267H0v2.202h20.148l-6.421 6.267 1.498 1.407Z"
                                    />
                                </svg>
                            </button>
                        </div> */}
                    </div>
                    <div className="featured-wrap">
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        reloadOnUpdate // default false
                        static // default false
                        autoPlay={true}
                        >
                            {
                                catLabel.map((catItems, index) => {
                                    // console.log(catItems)
                                    return (
                                        <article className="carousel-cell item is-featured is-small">
                                            <div
                                                className="item-image global-image global-image-orientation global-radius is-landscape"
                                            >
                                                
                                                    <Link to={`/category/${catItems.slug}`}
                                                    className="global-link"
                                                    aria-label={catItems.name}>
                                                    </Link>
                                                <img
                                                    sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                                    src={catItems.acf.category_image.url}
                                                    loading="lazy"
                                                    alt=""
                                                />
                                                <div className="item-authors global-authors">
                                                    <div>
                                                        <div
                                                            className="item-author global-item-author is-image global-image"
                                                        >
                                                            <a
                                                                href="author/liza.html"
                                                                className="global-link"
                                                                title="Liza Harber"
                                                            ></a>
                                                            <img
                                                                src="content/images/size/w300/2022/03/good-faces-onKIR2oTW0o-unsplash.jpg"
                                                                loading="lazy"
                                                                alt="Liza Harber"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-content">
                                                <div className="item-tags global-tags">
                                                    <a href="tag/design.html">Design</a
                                                    ><span
                                                    ><a href="tag/idea.html">Idea</a
                                                    ><a href="tag/review.html">Review</a></span
                                                    >
                                                </div>
                                                <h2 className="item-title">
                                                    <a href="#" className='dark:text-darkModeTextColor'>
                                                        {catItems.name}
                                                    </a>
                                                </h2>
                                                <p className="item-excerpt dark:text-darkModeTextColor">
                                                    {catItems.description}
                                                </p>
                                            </div>
                                        </article>
                                    )
                                })
                            }
                        </Flickity>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feature