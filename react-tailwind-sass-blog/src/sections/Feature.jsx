
import React from 'react'
import Flickity from 'react-flickity-component'

import "flickity/css/flickity.css";

const Feature = () => {
    return (
        <div className="featured-section">
            <div className="global-padding">
                <div className="featured-subtitle global-subtitle">
                    <small className="global-subtitle-title"
                    >Get started with our <span>best stories</span></small
                    >
                    <div className="featured-navigation">
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
                    </div>
                </div>
                <div className="featured-wrap">
                    <Flickity>
                    <article className="carousel-cell item is-featured is-small">
                        <div
                            className="item-image global-image global-image-orientation global-radius"
                        >
                            <a
                                href="new-technology-is-not-good-or-evil-in-and-of-itself.html"
                                className="global-link"
                                aria-label="New technology is not good or evil in and of itself"
                            ></a>
                            <img
                                srcset="
                            content/images/size/w300/2022/03/photo-1559650656-5d1d361ad10e.jpg   300w,
                            content/images/size/w600/2022/03/photo-1559650656-5d1d361ad10e.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpg 1200w
                          "
                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                src="content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpg"
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
                                <a
                                    href="new-technology-is-not-good-or-evil-in-and-of-itself.html"
                                >New technology is not good or evil in and of
                                    itself</a
                                >
                            </h2>
                            <p className="item-excerpt">
                                Vestibulum vehicula dui venenatis neque tempor,
                                accumsan iaculis sapien ornare. Sed at ante porta,
                                ullamcorper massa eu, ullamcorper sapien. Donec
                                pretium tortor augue. Integer egestas ut tellus sed
                                pretium. Nullam tristique augue ut mattis vulputate.
                                Duis et lorem in odio ultricies porttitor.
                            </p>
                        </div>
                    </article>
                    <article className="carousel-cell item is-featured is-small">
                        <div
                            className="item-image global-image global-image-orientation global-radius"
                        >
                            <a
                                href="its-a-new-era-in-design-there-are-no-rules.html"
                                className="global-link"
                                aria-label="It’s a new era in design, there are no rules"
                            ></a>
                            <img
                                srcset="
                            content/images/size/w300/2022/03/photo-1603808033176-9d134e6f2c74.jpg   300w,
                            content/images/size/w600/2022/03/photo-1603808033176-9d134e6f2c74.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1603808033176-9d134e6f2c74.jpg 1200w
                          "
                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                src="content/images/size/w1200/2022/03/photo-1603808033176-9d134e6f2c74.jpg"
                                loading="lazy"
                                alt=""
                            />
                            <div className="item-authors global-authors">
                                <div>
                                    <div
                                        className="item-author global-item-author is-image global-image"
                                    >
                                        <a
                                            href="author/breana.html"
                                            className="global-link"
                                            title="Breana Flatley"
                                        ></a>
                                        <img
                                            src="content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg"
                                            loading="lazy"
                                            alt="Breana Flatley"
                                        />
                                    </div>
                                    <div
                                        className="item-author global-item-author is-image global-image"
                                    >
                                        <a
                                            href="author/daryl.html"
                                            className="global-link"
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
                        <div className="item-content">
                            <div className="item-tags global-tags">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"
                                    /></svg
                                ><a href="tag/creative.html">Creative</a
                                ><span><a href="tag/product.html">Product</a></span>
                            </div>
                            <h2 className="item-title">
                                <a
                                    href="its-a-new-era-in-design-there-are-no-rules.html"
                                >It’s a new era in design, there are no rules</a
                                >
                            </h2>
                            <p className="item-excerpt">
                                Quibus autem in rebus tanta obscuratio non fit, fieri
                                tamen potest, ut id ipsum, quod interest, non sit
                                magnum. Ita fit ut, quanta differentia est in
                                principiis naturalibus, tanta sit in finibus bonorum
                                malorumque dissimilitudo.
                            </p>
                        </div>
                    </article>
                    <article className="carousel-cell item is-featured is-small">
                        <div
                            className="item-image global-image global-image-orientation global-radius"
                        >
                            <a
                                href="perfection-has-to-do-with-the-end-product.html"
                                className="global-link"
                                aria-label="Perfection has to do with the end product"
                            ></a>
                            <img
                                srcset="
                            content/images/size/w300/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg   300w,
                            content/images/size/w600/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg 1200w
                          "
                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                src="content/images/size/w1200/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg"
                                loading="lazy"
                                alt=""
                            />
                            <div className="item-authors global-authors">
                                <div>
                                    <div
                                        className="item-author global-item-author is-image global-image"
                                    >
                                        <a
                                            href="author/nichole.html"
                                            className="global-link"
                                            title="Nichole Becker"
                                        ></a>
                                        <img
                                            src="content/images/size/w300/2022/03/joshua-oyebanji-kMC1v6rBHMI-unsplash-2.jpg"
                                            loading="lazy"
                                            alt="Nichole Becker"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-tags global-tags">
                                <a href="tag/design.html">Design</a
                                ><span
                                ><a href="tag/creative.html">Creative</a
                                ><a href="tag/idea.html">Idea</a></span
                                >
                            </div>
                            <h2 className="item-title">
                                <a
                                    href="perfection-has-to-do-with-the-end-product.html"
                                >Perfection has to do with the end product</a
                                >
                            </h2>
                            <p className="item-excerpt">
                                Aenean eget urna aliquet, viverra orci quis, aliquam
                                erat. Ut rutrum quam quam, eu eleifend est blandit et.
                                Vivamus suscipit ultrices venenatis. Aliquam massa
                                ipsum, porta quis hendrerit at, varius sed leo.
                                Curabitur convallis urna sit amet mi tempus posuere.
                            </p>
                        </div>
                    </article>
                    <article className="carousel-cell item is-featured is-small">
                        <div
                            className="item-image global-image global-image-orientation global-radius"
                        >
                            <a
                                href="everyone-has-a-different-life-story.html"
                                className="global-link"
                                aria-label="Everyone has a different life story"
                            ></a>
                            <img
                                srcset="
                            content/images/size/w300/2022/03/photo-1581368129682-e2d66324045b.jpg   300w,
                            content/images/size/w600/2022/03/photo-1581368129682-e2d66324045b.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1581368129682-e2d66324045b.jpg 1200w
                          "
                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                src="content/images/size/w1200/2022/03/photo-1581368129682-e2d66324045b.jpg"
                                loading="lazy"
                                alt=""
                            />
                            <div className="item-authors global-authors">
                                <div>
                                    <div
                                        className="item-author global-item-author is-image global-image"
                                    >
                                        <a
                                            href="author/breana.html"
                                            className="global-link"
                                            title="Breana Flatley"
                                        ></a>
                                        <img
                                            src="content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg"
                                            loading="lazy"
                                            alt="Breana Flatley"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-tags global-tags">
                                <a href="tag/people.html">People</a
                                ><span><a href="tag/story.html">Story</a></span>
                            </div>
                            <h2 className="item-title">
                                <a href="everyone-has-a-different-life-story.html"
                                >Everyone has a different life story</a
                                >
                            </h2>
                            <p className="item-excerpt">
                                Non est igitur summum malum dolor. Tu autem inter haec
                                tantam multitudinem hominum interiectam non vides nec
                                laetantium nec dolentium. Nunc vero a primo quidem
                                mirabiliter occulta natura est nec perspici nec
                                cognosci potest.
                            </p>
                        </div>
                    </article>
                    <article className="carousel-cell item is-featured is-small">
                        <div
                            className="item-image global-image global-image-orientation global-radius"
                        >
                            <a
                                href="the-difference-is-quality.html"
                                className="global-link"
                                aria-label="The difference is quality"
                            ></a>
                            <img
                                srcset="
                            content/images/size/w300/2022/03/photo-1603015268928-a9f7b3edaf27.jpg   300w,
                            content/images/size/w600/2022/03/photo-1603015268928-a9f7b3edaf27.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpg 1200w
                          "
                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                src="content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpg"
                                loading="lazy"
                                alt=""
                            />
                            <div className="item-authors global-authors">
                                <div>
                                    <div
                                        className="item-author global-item-author is-image global-image"
                                    >
                                        <a
                                            href="author/brenda.html"
                                            className="global-link"
                                            title="Brenda Reichel"
                                        ></a>
                                        <img
                                            src="content/images/size/w300/2022/03/matheus-ferrero-dlYiklmLIGg-unsplash.jpg"
                                            loading="lazy"
                                            alt="Brenda Reichel"
                                        />
                                    </div>
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
                                ><a href="tag/lifestyle.html">Lifestyle</a
                                ><a href="tag/idea.html">Idea</a></span
                                >
                            </div>
                            <h2 className="item-title">
                                <a href="the-difference-is-quality.html"
                                >The difference is quality</a
                                >
                            </h2>
                            <p className="item-excerpt">
                                Vide, ne etiam menses! nisi forte eum dicis, qui,
                                simul atque arripuit, interficit. Atque his de rebus
                                et splendida est eorum et illustris oratio.
                            </p>
                        </div>
                    </article>
                    <article className="carousel-cell item is-featured is-small">
                        <div
                            className="item-image global-image global-image-orientation global-radius"
                        >
                            <span className="is-last"></span>
                            <a
                                href="problems-are-not-stop-signs-they-are-guidelines.html"
                                className="global-link"
                                aria-label="Problems are not stop signs, they are guidelines"
                            ></a>
                            <img
                                srcset="
                            content/images/size/w300/2022/03/photo-1597214844654-01d9d941e0fa.jpg   300w,
                            content/images/size/w600/2022/03/photo-1597214844654-01d9d941e0fa.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1597214844654-01d9d941e0fa.jpg 1200w
                          "
                                sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                src="content/images/size/w1200/2022/03/photo-1597214844654-01d9d941e0fa.jpg"
                                loading="lazy"
                                alt=""
                            />
                            <div className="item-authors global-authors">
                                <div>
                                    <div
                                        className="item-author global-item-author is-image global-image"
                                    >
                                        <a
                                            href="author/breana.html"
                                            className="global-link"
                                            title="Breana Flatley"
                                        ></a>
                                        <img
                                            src="content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg"
                                            loading="lazy"
                                            alt="Breana Flatley"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item-content">
                            <div className="item-tags global-tags">
                                <svg
                                    role="img"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"
                                    /></svg
                                ><a href="tag/idea.html">Idea</a
                                ><span><a href="tag/creative.html">Creative</a></span>
                            </div>
                            <h2 className="item-title">
                                <a
                                    href="problems-are-not-stop-signs-they-are-guidelines.html"
                                >Problems are not stop signs, they are guidelines</a
                                >
                            </h2>
                            <p className="item-excerpt">
                                Quid ad utilitatem tantae pecuniae. Duo enim genera
                                quae erant, fecit tria. Et quod est munus, quod opus
                                sapientiae.
                            </p>
                        </div>
                    </article>
                    </Flickity>
                </div>
            </div>
        </div>
    )
}

export default Feature

{/* 
<div class="featured-wrap flickity-enabled is-draggable" tabindex="0">
                    
                    
                    
                    
                    
                    
                  <div class="flickity-viewport" style={{height: '633.617px', touchAction: 'pan-y'}}><div class="flickity-slider" style={{left: "0px", transform: "translateX(0%)"}}><article class="item is-featured is-small is-image is-selected" style={{position: "absolute", left: "0px", transform: "translateX(0%)"}}>
                      <div class="item-image global-image global-image-orientation global-radius">
                        <a href="new-technology-is-not-good-or-evil-in-and-of-itself.html" class="global-link" aria-label="New technology is not good or evil in and of itself"></a>
                        <img srcset="
                            content/images/size/w300/2022/03/photo-1559650656-5d1d361ad10e.jpg   300w,
                            content/images/size/w600/2022/03/photo-1559650656-5d1d361ad10e.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpg 1200w
                          " sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="content/images/size/w1200/2022/03/photo-1559650656-5d1d361ad10e.jpg" loading="lazy" alt=""/>
                        <div class="item-authors global-authors">
                          <div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/liza.html" class="global-link" title="Liza Harber"></a>
                              <img src="content/images/size/w300/2022/03/good-faces-onKIR2oTW0o-unsplash.jpg" loading="lazy" alt="Liza Harber"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-content">
                        <div class="item-tags global-tags">
                          <a href="tag/design.html">Design</a><span><a href="tag/idea.html">Idea</a><a href="tag/review.html">Review</a></span>
                        </div>
                        <h2 class="item-title">
                          <a href="new-technology-is-not-good-or-evil-in-and-of-itself.html">New technology is not good or evil in and of
                            itself</a>
                        </h2>
                        <p class="item-excerpt">
                          Vestibulum vehicula dui venenatis neque tempor,
                          accumsan iaculis sapien ornare. Sed at ante porta,
                          ullamcorper massa eu, ullamcorper sapien. Donec
                          pretium tortor augue. Integer egestas ut tellus sed
                          pretium. Nullam tristique augue ut mattis vulputate.
                          Duis et lorem in odio ultricies porttitor.
                        </p>
                      </div>
                    </article><article class="item is-featured is-small is-image is-selected" style={{position: "absolute", left: '0px', transform: 'translateX(104.26%)'}}>
                      <div class="item-image global-image global-image-orientation global-radius">
                        <a href="its-a-new-era-in-design-there-are-no-rules.html" class="global-link" aria-label="It’s a new era in design, there are no rules"></a>
                        <img srcset="
                            content/images/size/w300/2022/03/photo-1603808033176-9d134e6f2c74.jpg   300w,
                            content/images/size/w600/2022/03/photo-1603808033176-9d134e6f2c74.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1603808033176-9d134e6f2c74.jpg 1200w
                          " sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="content/images/size/w1200/2022/03/photo-1603808033176-9d134e6f2c74.jpg" loading="lazy" alt=""/>
                        <div class="item-authors global-authors">
                          <div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/breana.html" class="global-link" title="Breana Flatley"></a>
                              <img src="content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg" loading="lazy" alt="Breana Flatley"/>
                            </div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/daryl.html" class="global-link" title="Daryl Wehner"></a>
                              <img src="content/images/size/w300/2022/03/kazi-mizan-ItjRqGiei5g-unsplash.jpg" loading="lazy" alt="Daryl Wehner"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-content">
                        <div class="item-tags global-tags">
                          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"></path></svg><a href="tag/creative.html">Creative</a><span><a href="tag/product.html">Product</a></span>
                        </div>
                        <h2 class="item-title">
                          <a href="its-a-new-era-in-design-there-are-no-rules.html">It’s a new era in design, there are no rules</a>
                        </h2>
                        <p class="item-excerpt">
                          Quibus autem in rebus tanta obscuratio non fit, fieri
                          tamen potest, ut id ipsum, quod interest, non sit
                          magnum. Ita fit ut, quanta differentia est in
                          principiis naturalibus, tanta sit in finibus bonorum
                          malorumque dissimilitudo.
                        </p>
                      </div>
                    </article><article class="item is-featured is-small is-image" aria-hidden="true" style={{position: "absolute", left: '0px', transform: 'translateX(208.51%)'}}>
                      <div class="item-image global-image global-image-orientation global-radius">
                        <a href="perfection-has-to-do-with-the-end-product.html" class="global-link" aria-label="Perfection has to do with the end product"></a>
                        <img srcset="
                            content/images/size/w300/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg   300w,
                            content/images/size/w600/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg 1200w
                          " sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="content/images/size/w1200/2022/03/photo-1638675039591-c7b3d1bbbd74.jpg" loading="lazy" alt=""/>
                        <div class="item-authors global-authors">
                          <div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/nichole.html" class="global-link" title="Nichole Becker"></a>
                              <img src="content/images/size/w300/2022/03/joshua-oyebanji-kMC1v6rBHMI-unsplash-2.jpg" loading="lazy" alt="Nichole Becker"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-content">
                        <div class="item-tags global-tags">
                          <a href="tag/design.html">Design</a><span><a href="tag/creative.html">Creative</a><a href="tag/idea.html">Idea</a></span>
                        </div>
                        <h2 class="item-title">
                          <a href="perfection-has-to-do-with-the-end-product.html">Perfection has to do with the end product</a>
                        </h2>
                        <p class="item-excerpt">
                          Aenean eget urna aliquet, viverra orci quis, aliquam
                          erat. Ut rutrum quam quam, eu eleifend est blandit et.
                          Vivamus suscipit ultrices venenatis. Aliquam massa
                          ipsum, porta quis hendrerit at, varius sed leo.
                          Curabitur convallis urna sit amet mi tempus posuere.
                        </p>
                      </div>
                    </article><article class="item is-featured is-small is-image" aria-hidden="true" style={{position: "absolute", left: "0px", transform: 'translateX(312.77%)'}}>
                      <div class="item-image global-image global-image-orientation global-radius">
                        <a href="everyone-has-a-different-life-story.html" class="global-link" aria-label="Everyone has a different life story"></a>
                        <img srcset="
                            content/images/size/w300/2022/03/photo-1581368129682-e2d66324045b.jpg   300w,
                            content/images/size/w600/2022/03/photo-1581368129682-e2d66324045b.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1581368129682-e2d66324045b.jpg 1200w
                          " sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="content/images/size/w1200/2022/03/photo-1581368129682-e2d66324045b.jpg" loading="lazy" alt=""/>
                        <div class="item-authors global-authors">
                          <div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/breana.html" class="global-link" title="Breana Flatley"></a>
                              <img src="content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg" loading="lazy" alt="Breana Flatley"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-content">
                        <div class="item-tags global-tags">
                          <a href="tag/people.html">People</a><span><a href="tag/story.html">Story</a></span>
                        </div>
                        <h2 class="item-title">
                          <a href="everyone-has-a-different-life-story.html">Everyone has a different life story</a>
                        </h2>
                        <p class="item-excerpt">
                          Non est igitur summum malum dolor. Tu autem inter haec
                          tantam multitudinem hominum interiectam non vides nec
                          laetantium nec dolentium. Nunc vero a primo quidem
                          mirabiliter occulta natura est nec perspici nec
                          cognosci potest.
                        </p>
                      </div>
                    </article><article class="item is-featured is-small is-image" aria-hidden="true" style={{position: "absolute", left:" 0px", transform:"translateX(417.03%)"}}>
                      <div class="item-image global-image global-image-orientation global-radius">
                        <a href="the-difference-is-quality.html" class="global-link" aria-label="The difference is quality"></a>
                        <img srcset="
                            content/images/size/w300/2022/03/photo-1603015268928-a9f7b3edaf27.jpg   300w,
                            content/images/size/w600/2022/03/photo-1603015268928-a9f7b3edaf27.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpg 1200w
                          " sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="content/images/size/w1200/2022/03/photo-1603015268928-a9f7b3edaf27.jpg" loading="lazy" alt=""/>
                        <div class="item-authors global-authors">
                          <div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/brenda.html" class="global-link" title="Brenda Reichel"></a>
                              <img src="content/images/size/w300/2022/03/matheus-ferrero-dlYiklmLIGg-unsplash.jpg" loading="lazy" alt="Brenda Reichel"/>
                            </div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/liza.html" class="global-link" title="Liza Harber"></a>
                              <img src="content/images/size/w300/2022/03/good-faces-onKIR2oTW0o-unsplash.jpg" loading="lazy" alt="Liza Harber"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-content">
                        <div class="item-tags global-tags">
                          <a href="tag/design.html">Design</a><span><a href="tag/lifestyle.html">Lifestyle</a><a href="tag/idea.html">Idea</a></span>
                        </div>
                        <h2 class="item-title">
                          <a href="the-difference-is-quality.html">The difference is quality</a>
                        </h2>
                        <p class="item-excerpt">
                          Vide, ne etiam menses! nisi forte eum dicis, qui,
                          simul atque arripuit, interficit. Atque his de rebus
                          et splendida est eorum et illustris oratio.
                        </p>
                      </div>
                    </article><article class="item is-featured is-small is-image" aria-hidden="true" style={{position: "absolute", left: "0px", transform: 'translateX(521.29%)'}}>
                      <div class="item-image global-image global-image-orientation global-radius">
                        <span class="is-last"></span>
                        <a href="problems-are-not-stop-signs-they-are-guidelines.html" class="global-link" aria-label="Problems are not stop signs, they are guidelines"></a>
                        <img srcset="
                            content/images/size/w300/2022/03/photo-1597214844654-01d9d941e0fa.jpg   300w,
                            content/images/size/w600/2022/03/photo-1597214844654-01d9d941e0fa.jpg   600w,
                            content/images/size/w1200/2022/03/photo-1597214844654-01d9d941e0fa.jpg 1200w
                          " sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px" src="content/images/size/w1200/2022/03/photo-1597214844654-01d9d941e0fa.jpg" loading="lazy" alt=""/>
                        <div class="item-authors global-authors">
                          <div>
                            <div class="item-author global-item-author is-image global-image">
                              <a href="author/breana.html" class="global-link" title="Breana Flatley"></a>
                              <img src="content/images/size/w300/2022/03/alison-erickson-Zt8IkNfhk54-unsplash.jpg" loading="lazy" alt="Breana Flatley"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item-content">
                        <div class="item-tags global-tags">
                          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"></path></svg><a href="tag/idea.html">Idea</a><span><a href="tag/creative.html">Creative</a></span>
                        </div>
                        <h2 class="item-title">
                          <a href="problems-are-not-stop-signs-they-are-guidelines.html">Problems are not stop signs, they are guidelines</a>
                        </h2>
                        <p class="item-excerpt">
                          Quid ad utilitatem tantae pecuniae. Duo enim genera
                          quae erant, fecit tria. Et quod est munus, quod opus
                          sapientiae.
                        </p>
                      </div>
                    </article></div></div></div> */}