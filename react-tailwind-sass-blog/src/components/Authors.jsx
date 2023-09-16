import React from 'react';
import author1 from '../assets/img/smartCrayon.jpeg';
import author2 from '../assets/img/learnwithme.jpeg';
import author3 from '../assets/img/patilsShop.jpeg';
import author4 from '../assets/img/workatiion.jpeg';
import author5 from '../assets/img/growEasily.jpeg';

const Authors = () => {
    return (
        <div className="loop-subtitle">
            <small className="loop-subtitle-title global-title dark:text-darkModeTextColor">
                See what we’ve <br /><span>written lately</span></small
            >
            <div className="global-authors option-1-2-3">
                <div>
                    <div className="global-item-author is-image global-image">
                        <a
                            href="#"
                            className="global-link"
                            title="Admin"
                        ></a>
                        <img
                            src={author2}
                            loading="lazy"
                            alt="Admin"
                        />
                    </div>
                    <div className="global-item-author is-image global-image">
                        <a
                            href="#"
                            className="global-link"
                            title="Smart Crayon"
                        ></a>
                        <img
                            src={author1}
                            loading="lazy"
                            alt="Smart Crayon"
                        />
                    </div>
                    <div className="global-item-author is-image global-image">
                        <a
                            href="#"
                            className="global-link"
                            title="Workatiion - Solo Traveller"
                        ></a>
                        <img
                            src={author4}
                            loading="lazy"
                            alt="Workatiion - Solo Traveller"
                        />
                    </div>
                    <div className="global-item-author is-image global-image">
                        <a
                            href="#"
                            className="global-link"
                            title="Patils Shop - Clothing Brand"
                        ></a>
                        <img
                            src={author3}
                            loading="lazy"
                            alt="Patils Shop - Clothing Brand"
                        />
                    </div>
                    <div className="global-item-author is-image global-image">
                        <a
                            href="#"
                            className="global-link"
                            title="Grow Easily"
                        ></a>
                        <img
                            src={author5}
                            loading="lazy"
                            alt="Grow Easily"
                        />
                    </div>
                </div>
                <small>Meet our author</small>
                <small>Meet our authors</small>
                <small className='dark:text-darkModeTextColor'>Meet our top authors</small>
            </div>
        </div>
    )
}

export default Authors