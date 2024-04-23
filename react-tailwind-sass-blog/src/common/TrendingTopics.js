import React from 'react'

const TrendingTopics = () => {
    return (
        <>
            <h2 className=' text-center mb-12'>Trending Topics</h2>
            <div className=' rounded-[150px] border-[1px] border-[#E9E8FF] max-w-[960px] mx-auto epcl-popular-categories'>
                <div className=' p-[20px]'>
                    <div className=' grid grid-cols-12.5%'>
                        <div className='item overlay-effect'>
                            <div class=" inline-block relative image-container ctag-21">
                                <span class="category-image ctag ctag-21">
                                    <img fetchpriority="low" decoding="async" loading="lazy" src="http://harshadpatil.com/wp-backend/wp-content/uploads/2024/04/html-icon.png" alt="HTML" class="cover" />
                                </span> <span class="epcl-decoration-counter">8</span>
                                <span class="overlay"></span>
                            </div>
                            <h3 class="title usmall">HTML</h3>
                            <a href="https://themes.estudiopatagon.com/wordpress/zento/category/2-html/" class="full-link"><span class="screen-reader-text"></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TrendingTopics