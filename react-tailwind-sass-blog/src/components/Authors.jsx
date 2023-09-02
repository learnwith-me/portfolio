import React from 'react';
import author1 from '../assets/img/a1.jpg';
import author2 from '../assets/img/a2.jpg';
import author3 from '../assets/img/a3.jpg';
import author4 from '../assets/img/a4.jpg';
import author5 from '../assets/img/a5.jpg';

const Authors = () => {
    return (
        <div class="loop-subtitle">
            <small class="loop-subtitle-title global-title dark:text-darkModeTextColor">
                See what we’ve <br /><span>written lately</span></small
            >
            <div class="global-authors option-1-2-3">
                <div>
                    <div class="global-item-author is-image global-image">
                        <a
                            href="#"
                            class="global-link"
                            title="Breana Flatley"
                        ></a>
                        <img
                            src={author1}
                            loading="lazy"
                            alt="Breana Flatley"
                        />
                    </div>
                    <div class="global-item-author is-image global-image">
                        <a
                            href="#"
                            class="global-link"
                            title="Damian Erdman"
                        ></a>
                        <img
                            src={author2}
                            loading="lazy"
                            alt="Damian Erdman"
                        />
                    </div>
                    <div class="global-item-author is-image global-image">
                        <a
                            href="#"
                            class="global-link"
                            title="Daryl Wehner"
                        ></a>
                        <img
                            src={author3}
                            loading="lazy"
                            alt="Daryl Wehner"
                        />
                    </div>
                    <div class="global-item-author is-image global-image">
                        <a
                            href="#"
                            class="global-link"
                            title="Nichole Becker"
                        ></a>
                        <img
                            src={author4}
                            loading="lazy"
                            alt="Nichole Becker"
                        />
                    </div>
                    <div class="global-item-author is-image global-image">
                        <a
                            href="#"
                            class="global-link"
                            title="Liza Harber"
                        ></a>
                        <img
                            src={author5}
                            loading="lazy"
                            alt="Liza Harber"
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