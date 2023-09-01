import React, { useState } from 'react'
import Nav from './Nav';
import TopSearch from '../components/TopSearch';
import Hero from './Hero';
import Feature from './Feature';

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
        </main>
        
        <TopSearch isSearchVisible={isSearchVisible} openSearch={openSearch} />
    </>
  )
}

export default Home