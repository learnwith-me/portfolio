import React, { Fragment } from 'react';

export const Icon = ({iconName, className = "", color = "", opcity = ""}) => {

    var colorWhite = "#fff";

    let icon = "";
    switch (iconName) {
        case 'icon-twitter':
            icon =<svg className="w-6 h-6 text-blue-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>;
            break;

        case 'icon-fb':
            icon =<svg className="w-6 h-6 text-blue-600 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>;
          </svg>
            break;

        case 'icon-g-plus':
            icon =<svg  width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="google-plus"><path d="M12.9,9c0,2.7-0.6,5-3.2,6.3c-3.7,1.8-8.1,0.2-9.4-3.6C-1.1,7.6,1.9,3.3,6.1,3c1.7-0.1,3.2,0.3,4.6,1.3 c0.1,0.1,0.3,0.2,0.4,0.4c-0.5,0.5-1.2,1-1.7,1.6c-1-0.8-2.1-1.1-3.5-0.9C5,5.6,4.2,6,3.6,6.7c-1.3,1.3-1.5,3.4-0.5,5 c1,1.7,2.6,2.3,4.6,1.9c1.4-0.3,2.4-1.2,2.6-2.6H6.9V9H12.9z"></path><polygon points="20,9 20,11 18,11 18,13 16,13 16,11 14,11 14,9 16,9 16,7 18,7 18,9"></polygon></svg>;
            break;

        case 'icon-instagram':
            icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="instagram"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"></path><circle cx="14.87" cy="5.26" r="1.09"></circle><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"></path></svg>;
            break;

        case 'icon-behance':
            icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="behance"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"></path><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"></path><rect x="13" y="4" width="5" height="1.4"></rect></svg>;
            break;

        case 'icon-dribble':
            icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="dribbble"><path fill="none" stroke="#000" strokeWidth="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"></path><path fill="none" stroke="#000" strokeWidth="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"></path><path fill="none" stroke="#000" strokeWidth="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"></path><circle fill="none" stroke="#000" strokeWidth="1.4" cx="10" cy="10" r="9"></circle></svg>;
            break;

        case 'icon-expand':
            icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="expand"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"></polygon><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"></polygon><path stroke="#000" strokeWidth="1.1" d="M11,9 L17,3"></path><path stroke="#000" strokeWidth="1.1" d="M3,17 L9,11"></path></svg>;
            break;

        case 'icon-shrink':
            icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="shrink"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"></polygon><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"></polygon><path fill="none" stroke="#000" strokeWidth="1.1" d="M12,8 L18,2"></path><path fill="none" stroke="#000" strokeWidth="1.1" d="M2,18 L8,12"></path></svg>
            break;

        case 'icon-filter':
            icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="settings"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"></ellipse><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"></ellipse><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"></circle><rect x="1" y="3" width="3" height="1"></rect><rect x="10" y="3" width="8" height="1"></rect><rect x="1" y="9" width="8" height="1"></rect><rect x="15" y="9" width="3" height="1"></rect><rect x="1" y="15" width="3" height="1"></rect><rect x="10" y="15" width="8" height="1"></rect></svg>;
            break;

        case 'header-top-bg':
            icon =<svg viewBox='0 0 100 6' xmlns='http://www.w3.org/2000/svg'>
                    <path className='g_fill_1' d='M100,7C66.7,7,33.4,7,0,7c0-2.5,0-4.5,0-7h100C100,2.5,100,4.5,100,7z' fill='currentcolor'></path>
                    <linearGradient id='fill_1'>
                        <stop className='g_fill_2' offset='0' stopColor='currentcolor'></stop>
                        <stop className='g_fill_3' offset='1' stopColor='currentcolor'></stop>
                    </linearGradient>
                    <path d='M0-1c0,1,0,3,0,4c20,3.3,38.3,3.3,55,0s31.7-3.7,45-1c0-0.7,0-2.3,0-3C66.7-1,33.3-1,0-1z' fill='url(#fill_1)'></path>
                    <clipPath id='clip_1'>
                        <path d='M0,0c0,1,0,2,0,3c20,3.3,38.3,3.3,55,0s31.7-3.7,45-1c0-0.7,0-1.3,0-2C66.7,0,33.3,0,0,0z'></path>
                    </clipPath>
                    <path clipPath='url(#clip_1)' d='M0,6c20-8,40-8,60,0C40,6,20,6,0,6z' fill='#fff' opacity='.5'></path>
                    </svg>;
            break;

            case 'footer-bottom-bg':
                icon =<svg viewBox='0 0 100 6' xmlns='http://www.w3.org/2000/svg'>
                    <path className='g_fill_1' d='M100-1C66.7-1,33.4-1,0-1c0,2.5,0,4.5,0,7h100C100,3.5,100,1.5,100-1z' fill='currentcolor'></path>
                    <linearGradient id='fill_2'>
                        <stop className='g_fill_2' offset='0' stopColor='currentcolor'></stop>
                        <stop className='g_fill_3' offset='1' stopColor='currentcolor'></stop>
                    </linearGradient>
                    <path d='M0,7c0-1,0-3,0-4c20-3.3,38.3-3.3,55,0s31.7,3.7,45,1c0,0.7,0,2.3,0,3C66.7,7,33.3,7,0,7z' fill='url(#fill_2)'></path>
                    </svg>;
                break;

            case 'icon-thumbnail':
                icon =<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="thumbnails"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"></rect><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"></rect><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"></rect><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"></rect></svg>;
                break;

            case 'icon-tag':
                icon =<svg width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="tag"><path fill="none" stroke="#000" strokeWidth="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"></path><circle cx="14" cy="6" r="1"></circle></svg>;
                break;

            case 'icon-clock':
                icon =<svg width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="clock"><circle fill="none" stroke="#000" strokeWidth="1.1" cx="10" cy="10" r="9"></circle><rect x="9" y="4" width="1" height="7"></rect><path fill="none" stroke="#000" strokeWidth="1.1" d="M13.018,14.197 L9.445,10.625"></path></svg>;
                break

            case 'icon-share':
                icon=<svg width="14" height="14" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="social"><line fill="none" stroke="#000" strokeWidth="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"></line><line fill="none" stroke="#000" strokeWidth="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"></line><circle fill="none" stroke="#000" strokeWidth="1.1" cx="15.5" cy="4.6" r="2.3"></circle><circle fill="none" stroke="#000" strokeWidth="1.1" cx="15.5" cy="14.8" r="2.3"></circle><circle fill="none" stroke="#000" strokeWidth="1.1" cx="4.5" cy="9.8" r="2.3"></circle></svg>;
                break;

            case 'icon-loader':
                icon=<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" data-svg="spinner">
                <circle fill="none" stroke="#000" cx="15" cy="15" r="14"></circle></svg>
                break;

            case 'icon-cart':
                icon=<svg xmlns="http://www.w3.org/2000/svg"  width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><circle className='stroke-white' cx="9" cy="19" r="2"/><circle className='stroke-white' cx="17" cy="19" r="2"/><path className='stroke-white' d="M3 3h2l2 12a3 3 0 003 2h7a3 3 0 003-2l1-7H5.8"/></svg>
                break;

            case 'icon-shirt':
                icon=<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path className='stroke-white' d="M15 4l6 2v5h-3v8a1 1 0 01-1 1H7a1 1 0 01-1-1v-8H3V6l6-2a3 3 0 006 0"/></svg>
                break;
            
            case 'icon-palette':
                icon=<svg xmlns="http://www.w3.org/2000/svg"  width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path className='stroke-white' d="M12 21a9 9 0 110-18 9 8 0 019 8 4.5 4 0 01-4.5 4H14a2 2 0 00-1 3.75A1.3 1.3 0 0112 21"/><circle className='stroke-white' cx="7.5" cy="10.5" r=".5" fill="currentColor"/><circle className='stroke-white' cx="12" cy="7.5" r=".5" fill="currentColor"/><circle className='stroke-white' cx="16.5" cy="10.5" r=".5" fill="currentColor"/></svg>
                break;

            case 'icon-map-pin':
                icon=<svg xmlns="http://www.w3.org/2000/svg"  width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><circle className='stroke-white' cx="12" cy="11" r="3"/><path className='stroke-white' d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                break;
            
            case 'icon-code':
                icon=<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path className='stroke-white' d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16"/></svg>
                break;

            case 'icon-device-gamepad':
                icon=<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><rect className='stroke-white' x="2" y="6" width="20" height="12" rx="2"/><path className='stroke-white' d="M6 12h4m-2-2v4M15 11v.01M18 13v.01"/></svg>
                break;

            case 'icon-tree':
                icon=<svg xmlns="http://www.w3.org/2000/svg"  width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><rect className='stroke-white' x="4" y="3" width="8" height="14" rx="4"/><rect className='stroke-white' x="12" y="7" width="8" height="10" rx="3"/><path className='stroke-white' d="M8 21v-8M16 21v-7"/></svg>
                break;

            case 'icon-blog':
                icon=<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><rect x="3" y="15" width="6" height="6" rx="2"/><rect x="15" y="15" width="6" height="6" rx="2"/><rect x="9" y="3" width="6" height="6" rx="2"/><path d="M6 15v-1a2 2 0 012-2h8a2 2 0 012 2v1M12 9v3"/></svg>
                break;
            
            case 'icon-world':
                icon=<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><circle className='stroke-white' cx="12" cy="12" r="9"/><path className='stroke-white' d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"/></svg>
                break;

            case 'icon-linkdin':
                icon=<svg className="w-6 h-6 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" ></path></svg>;
                break;

                case 'icon-whatsapp':
                    icon=<svg className="w-6 h-6 text-green-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" ></path></svg>;
                    break;

            case 'icon-heart':
                icon=
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-heart" width="15" height="15" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M0 0h24v24H0z" stroke="none"/><path fill="red" stroke="red" d="M19.5 13.572L12 21l-7.5-7.428m0 0A5 5 0 1112 7.006a5 5 0 117.5 6.572"/></svg>;
                break;

            case 'icon-github':
                icon=
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 100 100" width="40px" height="40px"><path fill="#f1bc19" d="M77 12A1 1 0 1 0 77 14A1 1 0 1 0 77 12Z"/><path fill="#e4e4f9" d="M50 13A37 37 0 1 0 50 87A37 37 0 1 0 50 13Z"/><path fill="#f1bc19" d="M83 11A4 4 0 1 0 83 19A4 4 0 1 0 83 11Z"/><path fill="#8889b9" d="M87 22A2 2 0 1 0 87 26A2 2 0 1 0 87 22Z"/><path fill="#fbcd59" d="M81 74A2 2 0 1 0 81 78 2 2 0 1 0 81 74zM15 59A4 4 0 1 0 15 67 4 4 0 1 0 15 59z"/><path fill="#8889b9" d="M25 85A2 2 0 1 0 25 89A2 2 0 1 0 25 85Z"/><path fill="#fff" d="M18.5 49A2.5 2.5 0 1 0 18.5 54 2.5 2.5 0 1 0 18.5 49zM79.5 32A1.5 1.5 0 1 0 79.5 35 1.5 1.5 0 1 0 79.5 32z"/><g><path fill="#a3a3cd" d="M50 25.625A24.25 24.25 0 1 0 50 74.125A24.25 24.25 0 1 0 50 25.625Z"/><path fill="#472b29" d="M50,74.825c-13.757,0-24.95-11.192-24.95-24.95S36.243,24.925,50,24.925s24.95,11.192,24.95,24.95 S63.757,74.825,50,74.825z M50,26.325c-12.985,0-23.55,10.564-23.55,23.55S37.015,73.425,50,73.425s23.55-10.564,23.55-23.55 S62.985,26.325,50,26.325z"/></g><g><path fill="#565fa1" d="M50 29.167A20.5 20.5 0 1 0 50 70.167A20.5 20.5 0 1 0 50 29.167Z"/></g><g><path fill="#472b29" d="M69.424,44.625c-0.214,0-0.412-0.139-0.478-0.354c-0.088-0.287-0.183-0.571-0.284-0.853 c-0.392-1.094-0.886-2.159-1.47-3.169c-0.139-0.238-0.057-0.545,0.182-0.683c0.239-0.141,0.545-0.057,0.683,0.183 c0.614,1.061,1.134,2.182,1.546,3.331c0.106,0.297,0.206,0.595,0.298,0.897c0.081,0.264-0.067,0.544-0.332,0.625 C69.521,44.618,69.472,44.625,69.424,44.625z"/></g><g><path fill="#472b29" d="M50,70.75c-11.511,0-20.875-9.337-20.875-20.813S38.489,29.125,50,29.125 c5.975,0,11.674,2.56,15.636,7.023c0.299,0.337,0.588,0.685,0.865,1.041c0.169,0.218,0.13,0.531-0.087,0.701 c-0.218,0.171-0.532,0.131-0.702-0.088c-0.264-0.339-0.54-0.669-0.824-0.99c-3.772-4.25-9.199-6.688-14.888-6.688 c-10.959,0-19.875,8.888-19.875,19.813S39.041,69.75,50,69.75s19.875-8.888,19.875-19.813c0-0.995-0.075-1.996-0.222-2.973 c-0.041-0.272,0.147-0.527,0.42-0.568c0.278-0.045,0.528,0.147,0.569,0.42c0.154,1.025,0.233,2.076,0.233,3.121 C70.875,61.413,61.511,70.75,50,70.75z"/></g><g><path fill="#fefdef" d="M61.496,42.088c0.365-1.671,0.206-3.743-0.486-5.818c-3.622,0-6.339,2.716-6.339,2.716 s0.016,0.018,0.02,0.023C54.627,39.008,54.565,39,54.5,39h-9c-0.043,0-0.085,0.006-0.128,0.006c0.003-0.004,0.017-0.02,0.017-0.02 s-2.717-2.716-6.339-2.716c-0.684,2.053-0.85,4.104-0.5,5.767C36.973,43.732,36,46,36,48.5c0,5.247,4.253,9.5,9.5,9.5h1.073 c-1.304,0.709-2.246,1.979-2.493,3.498c-1.72,0.232-3.979,0.18-5.028-1.394c-1.811-2.717-2.717-2.717-3.622-2.717 s-0.906,0.906,0,1.811c0.906,0.906,0.906,0.906,1.811,2.717c0.772,1.543,2.812,3.298,6.76,2.663v3.523 c0,0.447,0.079,0.871,0.191,1.282c2.425,0.577,6.502,1.061,11.665-0.151C55.943,68.868,56,68.493,56,68.102v-5.816 c0-1.858-1.047-3.456-2.573-4.286H54.5c5.247,0,9.5-4.253,9.5-9.5C64,46.025,63.046,43.779,61.496,42.088z"/><path fill="#472b29" d="M49.532,70.486c-2.23,0-4.075-0.287-5.457-0.616c-0.178-0.042-0.319-0.179-0.367-0.355 c-0.142-0.522-0.208-0.972-0.208-1.413V65.15c-4.563,0.514-6.279-2.154-6.707-3.011c-0.87-1.739-0.87-1.739-1.717-2.587 c-0.701-0.701-0.979-1.458-0.745-2.023c0.169-0.408,0.569-0.642,1.098-0.642c1.217,0,2.219,0.211,4.038,2.939 c0.839,1.258,2.676,1.379,4.193,1.218c0.23-0.978,0.724-1.855,1.423-2.554C39.762,58.272,35.5,53.875,35.5,48.5 c0-2.442,0.891-4.78,2.513-6.613c-0.306-1.722-0.108-3.761,0.564-5.775c0.068-0.204,0.259-0.342,0.474-0.342 c3.357,0,5.931,2.16,6.552,2.73h8.854c0.621-0.57,3.195-2.73,6.552-2.73c0.215,0,0.406,0.138,0.474,0.342 c0.679,2.037,0.872,4.096,0.551,5.83c1.591,1.826,2.465,4.146,2.465,6.559c0,5.375-4.263,9.773-9.585,9.991 c1.001,0.997,1.585,2.354,1.585,3.794v5.816c0,0.392-0.052,0.8-0.158,1.246c-0.043,0.185-0.188,0.328-0.372,0.371 C53.582,70.28,51.419,70.486,49.532,70.486z M44.602,68.965c2.412,0.537,6.153,0.9,10.83-0.148 c0.045-0.253,0.068-0.489,0.068-0.715v-5.816c0-1.597-0.886-3.07-2.312-3.846c-0.201-0.109-0.302-0.341-0.246-0.563 c0.056-0.222,0.256-0.377,0.484-0.377H54.5c4.962,0,9-4.037,9-9c0-2.247-0.843-4.404-2.373-6.074 c-0.11-0.12-0.154-0.286-0.12-0.444c0.331-1.517,0.202-3.352-0.36-5.202c-2.87,0.153-5.098,2.074-5.542,2.484 c-0.091,0.151-0.245,0.246-0.429,0.246c-0.007,0-0.096-0.006-0.103-0.006L45.5,39.5c-0.152,0-0.332-0.067-0.442-0.181l-0.021,0.021 c-0.025-0.024-2.438-2.39-5.623-2.561c-0.557,1.831-0.69,3.649-0.373,5.154c0.034,0.159-0.013,0.325-0.124,0.444 C37.358,44.052,36.5,46.227,36.5,48.5c0,4.963,4.038,9,9,9h1.073c0.229,0,0.428,0.155,0.484,0.377 c0.057,0.222-0.044,0.453-0.246,0.563c-1.205,0.654-2.021,1.799-2.238,3.139c-0.036,0.218-0.208,0.386-0.427,0.415 c-2.664,0.358-4.568-0.198-5.511-1.611c-1.663-2.494-2.412-2.494-3.206-2.494c-0.137,0-0.18,0.032-0.181,0.032 c-0.025,0.064,0.043,0.435,0.534,0.926c0.963,0.963,0.998,1.033,1.905,2.847c0.369,0.736,1.911,3.093,6.233,2.392 c0.147-0.021,0.292,0.019,0.404,0.113c0.111,0.096,0.176,0.234,0.176,0.381v3.523C44.5,68.372,44.533,68.651,44.602,68.965z"/></g><g><path fill="#fefdef" d="M60.437,51.362c-0.9,1.994-2.876,3.652-6.354,3.93"/><path fill="#472b29" d="M54.083,55.542c-0.129,0-0.238-0.1-0.249-0.23c-0.011-0.138,0.091-0.258,0.229-0.269 c3.805-0.305,5.442-2.227,6.146-3.784c0.058-0.127,0.205-0.183,0.331-0.125c0.125,0.057,0.182,0.204,0.125,0.33 c-1.073,2.377-3.403,3.824-6.562,4.077C54.097,55.542,54.09,55.542,54.083,55.542z"/></g><g><path fill="#fefdef" d="M60.959,47.41c0.111,0.753,0.109,1.552-0.03,2.342"/><path fill="#472b29" d="M60.93,50.002c-0.015,0-0.029-0.001-0.044-0.004c-0.136-0.023-0.227-0.153-0.203-0.289 c0.129-0.734,0.139-1.517,0.029-2.263c-0.021-0.136,0.074-0.264,0.21-0.283c0.137-0.02,0.264,0.073,0.284,0.211 c0.12,0.809,0.109,1.624-0.031,2.421C61.155,49.917,61.049,50.002,60.93,50.002z"/></g><g><path fill="#fefdef" d="M59.083,43.875c0.633,0.451,1.146,1.179,1.488,2.055"/><path fill="#472b29" d="M60.571,46.181c-0.1,0-0.194-0.061-0.233-0.159c-0.334-0.856-0.818-1.528-1.4-1.942 c-0.112-0.08-0.139-0.236-0.059-0.349c0.081-0.113,0.236-0.138,0.349-0.06c0.662,0.472,1.207,1.222,1.576,2.169 c0.05,0.129-0.014,0.273-0.142,0.324C60.632,46.175,60.602,46.181,60.571,46.181z"/></g></svg>;
                break;
            
            case 'icon-github-common':
                icon=
                <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="40px" height="40px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                break;

            case 'icon-tick':
                icon=
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 0C4.47687 0 0 4.47687 0 10C0 15.5231 4.47687 20 10 20C15.5225 20 20 15.5225 20 10C20 4.47687 15.5225 0 10 0ZM10 18.75C5.16752 18.75 1.25002 14.8325 1.25002 10C1.25002 5.16752 5.16752 1.25002 10 1.25002C14.8325 1.25002 18.75 5.16752 18.75 10C18.75 14.8325 14.8325 18.75 10 18.75Z" fill="#D3DCE6"/><path d="M14.5622 6.49581L8.13219 12.8683L5.45655 10.2458C5.2103 10.0014 4.81032 10.0014 4.56406 10.2458C4.31719 10.4902 4.31719 10.8858 4.56406 11.1296L7.68841 14.1914C7.94464 14.417 8.32779 14.442 8.5809 14.1914L15.4552 7.37957C15.7015 7.13581 15.7015 6.73957 15.4552 6.49581C15.2084 6.25205 14.8091 6.25205 14.5622 6.49581Z" fill="#D3DCE6"/></svg>
                break;


        default:
                icon = "";
    }

    return (
        <Fragment>
            {icon}
        </Fragment>
    );    
}