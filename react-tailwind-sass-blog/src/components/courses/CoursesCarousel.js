import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchCourses } from '../../api/FetchCourses';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const CoursesCarousel = ({ FetchCourses, CoursesReducer, toggleDropdown }) => {
    useEffect(() => {
        FetchCourses('courses');
    }, []);

    // Settings for the slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 3, // Desktop
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        centerPadding: '40px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3, // Mobile
                    slidesToScroll: 3,
                }
            }
        ]
    };

    console.log(CoursesReducer.courseData);

    return (
        <>
            <h2 className=' text-center mb-12 dark:text-white flex justify-center items-center gap-2'>
                <svg className='icon large secondary-color' xmlns="http://www.w3.org/2000/svg" id="trending-icon" viewBox="0 0 24 24">
                    <path fill="#1F1B1B" d="m6.67 7.914 3.062-4.143C11.71 1.093 12.7-.246 13.624.037c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363 2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734-.923-.283-.923-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z" />
                    <path fill="currentColor" d="m5.67 7.914 3.062-4.143C10.71 1.093 11.7-.246 12.624.037c.923.283.923 1.925.923 5.21v.31c0 1.185 0 1.777.379 2.148l.02.02c.387.363 1.003.363 2.236.363 2.22 0 3.329 0 3.704.673l.018.034c.354.683-.289 1.553-1.574 3.29l-3.062 4.144c-1.98 2.678-2.969 4.017-3.892 3.734-.923-.283-.923-1.925-.923-5.21v-.31c0-1.184 0-1.777-.379-2.148l-.02-.02c-.387-.363-1.003-.363-2.236-.363-2.22 0-3.329 0-3.704-.673a1.084 1.084 0 0 1-.018-.034c-.354-.683.289-1.552 1.574-3.29Z" />
                </svg>
                Interview Preparation Courses
            </h2>
            <div className='courses-grid max-w-[100%] mx-auto epcl-popular-categories'>
                <Slider {...settings}>
                    {
                        CoursesReducer.courseData && Array.isArray(CoursesReducer.courseData) &&
                        CoursesReducer.courseData.map((courseHeading, idx) => (

                            <article className={`item default classic-large bg-box ctag ctag-${idx + 100} `} key={idx} >
                                <div className="epcl-flex">
                                    <div className='meta meta-data small'>
                                        <div className="tags fill-color">
                                            <Link className="primary-tag tag-link-3 " tabindex="0">
                                                {courseHeading.categories[0]}
                                            </Link>
                                        </div>
                                        <Link to="" className="author flex text-white text-[13px]" tabindex="0">
                                            <svg clasName="icon main-color" xmlns="http://www.w3.org/2000/svg" id="title-decoration" viewBox="0 0 18 18">
                                                <path fill="#2D2A2C" d="M8.05 2.478a.758.758 0 0 1 1.34-.086l.044.086.782 1.758a8.25 8.25 0 0 0 3.253 3.698l.241.142 1.388.78c.486.274.513.95.081 1.269l-.08.052-1.389.78a8.25 8.25 0 0 0-3.376 3.587l-.118.254-.782 1.758a.758.758 0 0 1-1.34.085l-.044-.085-.781-1.758a8.25 8.25 0 0 0-3.253-3.699l-.242-.141-1.388-.781a.758.758 0 0 1-.08-1.268l.08-.053 1.388-.78A8.25 8.25 0 0 0 7.15 4.49l.119-.254.781-1.758Zm6.858-.37a4.299 4.299 0 0 0 1.81 2.005c.12.067.12.24 0 .308a4.299 4.299 0 0 0-1.81 2.005.181.181 0 0 1-.331 0 4.298 4.298 0 0 0-1.81-2.005.177.177 0 0 1 0-.308 4.298 4.298 0 0 0 1.81-2.006.181.181 0 0 1 .33 0Z" />
                                                <path fill="currentColor" d="M7.558 1.96a.758.758 0 0 1 1.34-.085l.044.086.782 1.758a8.25 8.25 0 0 0 3.252 3.699l.242.141 1.388.78c.486.274.513.95.081 1.269l-.08.052-1.389.781a8.25 8.25 0 0 0-3.376 3.586l-.118.254-.782 1.758a.758.758 0 0 1-1.34.086l-.044-.086-.782-1.758a8.25 8.25 0 0 0-3.252-3.699l-.242-.14-1.388-.782a.758.758 0 0 1-.081-1.268l.08-.052 1.389-.78a8.25 8.25 0 0 0 3.376-3.587l.118-.254.782-1.758Zm6.857-.37a4.3 4.3 0 0 0 1.811 2.006c.12.068.12.24 0 .308a4.3 4.3 0 0 0-1.81 2.005.18.18 0 0 1-.331 0 4.3 4.3 0 0 0-1.811-2.005.177.177 0 0 1 0-.308 4.299 4.299 0 0 0 1.81-2.005.18.18 0 0 1 .331 0Z" />
                                            </svg>
                                            <span className="author-name">{courseHeading.level}</span>
                                        </Link>
                                        <div className="min-read meta-info flex items-center">

                                            <svg clasName="icon main-color" xmlns="http://www.w3.org/2000/svg" id="reading-icon" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M6.382 5.968A8.962 8.962 0 0 1 12 4c2.125 0 4.078.736 5.618 1.968l1.453-1.453 1.414 1.414-1.453 1.453A9 9 0 1 1 3 13c0-2.125.736-4.078 1.968-5.618L3.515 5.93l1.414-1.414 1.453 1.453ZM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm1-8h3l-5 6.5V14H8l5-6.505V12ZM8 1h8v2H8V1Z" />
                                            </svg>
                                            {`Lessions ${courseHeading.no_of_chapters}`}
                                        </div>
                                        <div className="difficulty meta-info flex">
                                            <svg className="icon main-color" xmlns="http://www.w3.org/2000/svg" id="medal-icon" viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0ZM12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                            </svg>
                                            <div>
                                                <span className="name">Rating:</span>
                                                <div className="rating star-3">
                                                    <span className="star">★</span>
                                                    <span className="star">★</span>
                                                    <span className="star">★</span>
                                                    <span className="star">★</span>
                                                    <span className="star">★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <header>
                                            <h2 className="main-title title text-left medium no-margin fw-bold underline-effect white">
                                                {courseHeading.title}
                                            </h2>
                                        </header>
                                    </div>

                                    <Link to={`/course/${courseHeading.slug}`} className="epcl-button black">Enroll for free</Link>
                                </div>
                            </article>
                        ))
                    }
                </Slider>
            </div >
        </>
    );
};

const mapStateToProps = (state) => ({
    CoursesReducer: state.CoursesReducer,
});

export default connect(mapStateToProps, { FetchCourses })(CoursesCarousel);
