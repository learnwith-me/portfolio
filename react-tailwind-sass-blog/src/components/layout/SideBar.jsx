import React from 'react'
import AboutMe from '../posts/AboutMe'
import FeaturePost from '../posts/FeaturePost';

const SideBar = () => {
  return (
    <div className=' dark:bg-darkModeBlack global-padding hidden md:block !pl-0 '>
      <AboutMe />
      <FeaturePost />
    </div>
  )
}

export default SideBar