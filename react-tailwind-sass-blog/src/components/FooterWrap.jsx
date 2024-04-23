import React from 'react'
import { Link } from 'react-router-dom'
import GitHub2 from '../icons/GitHub2'
import LinkedIn from '../icons/LinkedIn'
import Instagram from '../icons/Instagram'
import WhatsApp from '../icons/WhatsApp'
import Heart from '../icons/Heart'
import DarkModeToggle from './DarkModeToggle'

const FooterWrap = () => {
    return (
        <div className="footer-cotainer">
            <div className="footer-content text-center !pr-0 md:!mb-[100px]">
                <div className="footer-logo">
                    <Link to="/" className="is-logo !font-SVN-Have-Heart !text-[50px] dark:text-white">
                        Harshad Patil
                    </Link>

                </div>
                <p className="footer-desciption dark:text-white w-full">
                    {/* Feel free to copy. If you need any help, ping me ! */}
                    {/* There is First Time for Everything... */}
                    “In learning you will teach, and in teaching you will learn.”
                </p>
            </div>
            <div className="footer-nav !grow-[90] text-">
                <div className="footer-nav-column dark:text-white">
                    <small>About</small>
                    <ul>
                        <li>
                            <Link className=' dark:text-white' to="/">Home</Link>
                        </li>
                        <li>
                            <Link className=' dark:text-white' to="/about-me">About Me</Link>
                        </li>
                        <li>
                            <Link className=' dark:text-white' to="/my-passion">My Passion</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav-column dark:text-white">
                    <small className=' !-ml-[10px]'>〈Learn With Me /〉</small>
                    <ul>
                        <li>
                            <a href="javascript:void(0)" className='dark:text-white relative'>
                                High on Javascript
                                {/* <span class="absolute -top-[12px] z-0 md:top-[-12px] block -left-[2px] md:-left-[34px] text-[8px] bg-[#f922a5] rounded-md py-0 px-[6px] text-white ">comming soon</span> */}
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)" className='dark:text-white relative'>
                                Learn React JS In 30 Days
                                {/* <span class="absolute -top-[12px] z-0 md:top-[-12px] block -left-[2px] md:-left-[34px] text-[8px] bg-[#f922a5] rounded-md py-0 px-[6px] text-white ">comming soon</span> */}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav-column dark:text-white">
                    <small>Improve English</small>
                    <ul>
                        <li>
                            <a href="javascript:void(0)" className='dark:text-white relative'>
                                Learn comming soon words daily
                                {/* <span class="absolute -top-[12px] z-0 md:top-[-12px] block -left-[2px] md:-left-[34px] text-[8px] bg-[#f922a5] rounded-md py-0 px-[6px] text-white ">comming soon</span> */}
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav-column dark:text-white">
                    <small>Get in Touch     </small>
                    <ul>
                        <li>
                            <a href="javascript:void(0)" className='dark:text-white relative' alt='Mumbai, India' title='Mumbai, India'>
                                Mumbai, India |<span class="absolute text-xl top-[0px] left-[104px] md:left-[116px]">🇮🇳</span> <span class="text-teal-600 text-xs p-1"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>




            <div className="footer-copyright dark:text-white">
                <div className="flex items-center justify-center flex-1 space-x-6 mt-0 mb-1">
                    <a href="https://github.com/learnwith-me" aria-label="Github Portfolio" target="_blank" className="whitespace-nowrap text-sm nav-icon github">
                        <GitHub2 />
                    </a>
                    <a href="https://www.linkedin.com/in/coderbotics/" aria-label="Check my Linkedin" target="_blank" className="whitespace-nowrap text-sm nav-icon">
                        <LinkedIn />
                    </a>
                    <a href="https://www.instagram.com/learnwithme.js/" aria-label="Instagram for more learning" target="_blank" className="whitespace-nowrap text-sm nav-icon">
                        <Instagram />
                    </a>
                    <a href="#" className="whitespace-nowrap text-sm nav-icon" aria-label="whatsapp">
                        <WhatsApp />
                    </a>
                </div>
                <div className="flex items-center justify-center flex-1 text-2xl gap-1 text-gray-700 tracking-wider py-3 dark:text-white">
                    <span>crafted with</span>
                    <Heart />
                    <em>by</em>
                    <span>Harshad Manohar Patil</span>
                </div>
            </div>

            <DarkModeToggle />
        </div>
    )
}

export default FooterWrap