import React from 'react'
import AboutMe from '../components/AboutMe'
import FeaturedPost from '../components/FeaturePost'

const SideBar = () => {
  return (
    <div className=' dark:bg-darkModeBlack global-padding hidden md:block '>
      <AboutMe />
      <FeaturedPost />
    </div>
  )
}

export default SideBar