import React from 'react'
import GitHub2 from '../../icons/GitHub2';
import LinkedIn from '../../icons/LinkedIn';
import Instagram from '../../icons/Instagram';
import WhatsApp from '../../icons/WhatsApp';
import Logo from "../../assets/img/hpatil-pic.jpg";

const AboutMe = () => {
  return (
    <div className="max--sm rounded-lg bg-[#f1f1f1] dark:bg-[#2b2b2b] p-[30px]">
      <h3 className="font-normal text-center uppercase tracking-loose-one mb-10 dark:text-white">ABOUT ME</h3>
      <div className="flex flex-col items-center pb-5 text-center">
        <img className="mb-3 w-[40%] h-auto rounded-full shadow-lg" src={Logo} width="152" height="40" alt="Harshad Patil" />
        <h3 className="mb-1 font-medium text-gray-900 dark:text-white">Front-end Engg.</h3>
        <span className=" dark:text-white text-[14px]">Hello. I am a Harshad Patil.  I live in Mumbai, India. I am here to share my expertise, and dynamic thinking which I have learned in the past years.</span>
        <div className="flex mt-4 space-x-3 lg:mt-6">
          <a href="https://github.com/coderbotics1/" aria-label="Github Portfolio" target="_blank" className="whitespace-nowrap text-sm nav-icon github">
            <GitHub2 />
          </a>
          <a href="https://www.linkedin.com/in/coderbotics/" aria-label="Check my Linkedin" target="_blank" className="whitespace-nowrap text-sm nav-icon">
            <LinkedIn />
          </a>
          <a href="https://www.instagram.com/learnwithme.js/" aria-label="Instagram for more learning" target="_blank" className="whitespace-nowrap text-sm nav-icon">
            <Instagram />
          </a>
          <a href="#" className="whitespace-nowrap text-sm nav-icon" aria-label="Whatsapp">
            <WhatsApp />
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe