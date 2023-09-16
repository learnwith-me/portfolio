import React, { useState, useEffect } from 'react';
import TopSearchUi from './TopSearchUi';
import { Link } from 'react-router-dom';

const TopSearch = ({searchResults}) => {
 

  return (
    <main className='global-main'>
        <div className="loop-section global-padding dark:bg-darkModeBlack !mb-0">
        {searchResults.length > 0 ? (
           <div className="loop-wrap !mb-0">

           {
               searchResults.map((sResult, index) => {
                   return (
                       
                       <article key={index} className="item is-loop is-image">
                           <div
                               className="item-image global-image global-image-orientation global-radius is-landscape"
                           >
                               <Link to={`/singlepost/${sResult.id}/${sResult.slug}`} className='global-link'></Link>
                               <img
                                   sizes="(max-width:480px) 300px, (max-width:768px) 600px, 1200px"
                                   src={sResult?.featured_image?.medium_large}
                                   loading="lazy"
                                   alt=""
                               />
                               {/* <div className="item-authors global-authors">
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
                               </div> */}
                           </div>
                           <div className="item-content">
                               {/* <div className="item-tags global-tags">
                                   <a href="tag/lifestyle.html">Lifestyle</a><span ><a href="tag/people.html">People</a ><a href="tag/review.html">Review</a></span>
                               </div> */}
                               <h2 className="item-title dark:text-darkModeTextColor">
                                   <Link to={`/singlepost/${sResult.id}/${sResult.slug}`} className='dark:text-darkModeTextColor'>
                                       {sResult.title}
                                   </Link>
                               </h2>
                               <p className="item-excerpt dark:text-darkModeTextColor">
                                   {sResult.excerpt}
                               </p>
                           </div>
                       </article>
                               
                   )
               })}
               
       </div>
        ) : (
          <p>No results found.</p>
        )}
        </div>
    </main>
  );
};

export default TopSearch;
