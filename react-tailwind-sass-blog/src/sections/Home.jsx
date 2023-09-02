import React, { useState } from 'react'
import Nav from './Nav';
import TopSearch from '../components/TopSearch';
import Hero from './Hero';
import Feature from './Feature';
import Authors from '../components/Authors';
import Posts from '../components/Posts';
import Recommended from '../components/Recommended';
import Footer from './Footer';

const Home = () => {

    const [isSearchVisible, setSearchVisible] = useState(false);

    const openSearch = () => {
        setSearchVisible(!isSearchVisible)
        if (!isSearchVisible) {
            document.body.classList.add('search-is-active');
            document.getElementById('isSearchVisible').classList.add('display-block');
            document.body.classList.remove('search-no-active');
        } else {
            document.body.classList.remove('search-is-active');
            document.body.classList.add('search-no-active');
        }
    }
    

  return (
    <>
        <Nav openSearch={openSearch} />
        <main className='global-main'>
            <div className="hero-section dark:bg-darkModeBlack">
                <div className="hero-wrap">
                    <Hero />
                    <Feature />
                </div>
            </div>
            <div class="loop-section global-padding">
                <Authors />
                <Posts />
            </div>
            <div class="pagination-section">
                <a href="page/2.html" aria-label="Load more"></a>
                <button class="global-button dark:bg-ghost-accent-color">Load more</button>
            </div>
            <Recommended />
        </main>
        <Footer />
        <TopSearch isSearchVisible={isSearchVisible} openSearch={openSearch} />
    </>
  )
}

export default Home