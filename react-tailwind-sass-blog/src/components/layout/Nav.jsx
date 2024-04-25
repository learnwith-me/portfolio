import React, { useState } from 'react'
import GitHub from '../../icons/GitHub';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../../common/DarkModeToggle';
import LoginModal from '../auth/login/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/slice/authenticationSlice';
import RegisterModal from '../auth/registration/RegisterModal';
import CourseTitle from '../courses/CourseTitle';

const Nav = ({ openSearch, handleFocusField }) => {

    const [isDropdownVisible, setDropdownVisible] = useState(false),
        dispatch = useDispatch(),
        authUser = useSelector((state) => state.auth.user);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);

    const handleCloseLoginModal = () => {
        setIsLoginModalOpen(false);
    };

    // const toggleDropdown = () => {
    //     setDropdownVisible(!isDropdownVisible)
    //     if (!isDropdownVisible) {
    //         document.getElementById('is-dropdown').classList.add('is-active');
    //     } else {
    //         document.getElementById('is-dropdown').classList.remove('is-active');
    //     }
    // }



    const toggleDropdown = () => {
        const dropdown = document.getElementById('is-dropdown');
        setDropdownVisible(!isDropdownVisible);
        if (!isDropdownVisible) {
            dropdown.classList.add('is-active');
            document.body.addEventListener('click', handleBodyClick);
        } else {
            dropdown.classList.remove('is-active');
            document.body.removeEventListener('click', handleBodyClick);
        }
    };

    const handleBodyClick = (event) => {
        const dropdown = document.getElementById('is-dropdown');
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('is-active');
            document.body.removeEventListener('click', handleBodyClick);
        }
    };


    return (
        <header className="header-section dark:bg-darkModeBlack">
            <div className="header-wrap global-padding">
                <div className="header-logo">
                    <a href="/" className="is-logo dark:text-white !font-SVN-Have-Heart !text-[50px]">
                        Harshad Patil
                    </a>
                </div>
                <div className="header-nav">
                    <span onClick={openSearch} className="header-search search-open is-mobile"><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className=' dark:fill-white' d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" /></svg></span>
                    <input id="toggle" className="header-checkbox" type="checkbox" />
                    <label className="header-toggle" htmlFor="toggle">
                        <span>
                            <span className="bar dark:!bg-white"></span>
                            <span className="bar dark:!bg-white"></span>
                            <span className="bar dark:!bg-white"></span>
                        </span>
                    </label>
                    <nav className=' max-md:dark:!bg-white z-10'>
                        <ul>
                            <li>
                                <Link className=' dark:text-black md:dark:text-white' to="/">Home</Link>
                            </li>
                            {/* <CourseTitle toggleDropdown={toggleDropdown} /> */}
                            <li>
                                <Link className=' dark:text-black md:dark:text-white' to="/about-me">About Me</Link>
                            </li>
                            <li>
                                <Link className=' dark:text-black md:dark:text-white' to="/my-passion">My Passion</Link>
                            </li>
                            <li onClick={() => { openSearch(); handleFocusField(); }} className="header-search search-open is-desktop global-button dark:bg-darkModeGray2 group"><span className='flex dark:text-black group-hover:dark:text-black'><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className=' dark:fill-black group-hover:dark:fill-black' d="m16.822 18.813 4.798 4.799c.262.248.61.388.972.388.772-.001 1.407-.637 1.407-1.409 0-.361-.139-.709-.387-.971l-4.799-4.797c3.132-4.108 2.822-10.005-.928-13.756l-.007-.007-.278-.278a.6985.6985 0 0 0-.13-.107C13.36-1.017 7.021-.888 3.066 3.067c-4.088 4.089-4.088 10.729 0 14.816 3.752 3.752 9.65 4.063 13.756.93Zm-.965-13.719c2.95 2.953 2.95 7.81 0 10.763-2.953 2.949-7.809 2.949-10.762 0-2.951-2.953-2.951-7.81 0-10.763 2.953-2.95 7.809-2.95 10.762 0Z" /></svg>Search</span></li>
                            {/* <li>
                                    <Link to="https://github.com/learnwith-me" target='blank' title='Github Portfolio'>
                                        <GitHub />
                                    </Link>
                                </li> */}
                            {/* <li><a href="style-guide.html" className=' max-md:dark:text-black dark:text-white'>Style Guide</a></li>
                                <li><a href="membership.html" className=' max-md:dark:text-black dark:text-white'>Membership</a></li> */}
                            <li id='is-dropdown' className="is-dropdown">
                                {
                                    !authUser?.token ? (
                                        <span className='flex gap-5 cursor-pointer' onClick={toggleDropdown}>
                                            <LoginModal className=" dark:text-white" openModal={false} loginToReadCourse={``} forMobile={`md:hidden block`} loginBtnText={`Login`} />
                                            {/* <RegisterModal openModal={false} loginBtnText={`Register`} /> */}
                                        </span>
                                    ) : (
                                        <>
                                            <span className='flex gap-2 cursor-pointer dark:text-white' onClick={toggleDropdown}>
                                                Hi {authUser.user_display_name}
                                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path className='scale-75 dark:fill-white' d="m11.974 18.908.019.002.025.001c.085 0 .166-.034.226-.094L23.906 7.155A.32.32 0 0 0 24 6.928c0-.085-.034-.166-.094-.227l-1.519-1.518a.3217.3217 0 0 0-.454 0l-9.94 9.94-9.927-9.926a.3218.3218 0 0 0-.227-.094c-.085 0-.167.034-.227.094L.094 6.716a.3217.3217 0 0 0 0 .454l11.647 11.647c.06.06.142.094.227.094l.006-.003Z" /></svg>
                                            </span>
                                            <ul className=' dark:!bg-white'>
                                                <li><a onClick={() => dispatch(logout())} className='dark:!text-black'>Logout</a></li>
                                                {/* <li><a href="tags.html" className='dark:!text-black'>Tags</a></li>
                                                <li><a href="authors.html" className='dark:!text-black'>Authors</a></li>
                                                <li><a href="subscribe.html" className='dark:!text-black'>Subscribe</a></li>
                                                <li><a href="contact.html" className='dark:!text-black'>Contact</a></li>
                                                <li><a href="https://themeforest.net/item/basho-multipurpose-ghost-blog-theme/36746216" className='dark:!text-black'>Get Theme</a></li> */}
                                            </ul>
                                        </>
                                    )
                                }
                            </li>




                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav