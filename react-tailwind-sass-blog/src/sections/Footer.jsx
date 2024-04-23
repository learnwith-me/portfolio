import React from 'react'
import Subscribe from '../components/Subscribe'
import FooterWrap from '../components/FooterWrap'

const Footer = () => {
  return (
    <footer className='footer-section global-footer dark:bg-darkModeBlack'>
      <div className='footer-wrap global-padding !mb-0 pb-[6vh]'>
        {/* <Subscribe /> */}
        <FooterWrap />
      </div>
    </footer>
  )
}

export default Footer