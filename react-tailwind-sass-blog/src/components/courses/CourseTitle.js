import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchCourses } from '../../api/FetchCourses';

const CourseTitle = ({ FetchCourses, CoursesReducer, toggleDropdown }) => {
    useEffect(() => {
        FetchCourses('courses');
    }, []);

    console.log(CoursesReducer.courseData);

    return (
        <li id='is-dropdown' className="is-dropdown">
            <span className='flex gap-2 cursor-pointer text-black dark:!text-white' onClick={toggleDropdown}>
                Courses
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path className='dark:text-white scale-75 dark:fill-white' d="m11.974 18.908.019.002.025.001c.085 0 .166-.034.226-.094L23.906 7.155A.32.32 0 0 0 24 6.928c0-.085-.034-.166-.094-.227l-1.519-1.518a.3217.3217 0 0 0-.454 0l-9.94 9.94-9.927-9.926a.3218.3218 0 0 0-.227-.094c-.085 0-.167.034-.227.094L.094 6.716a.3217.3217 0 0 0 0 .454l11.647 11.647c.06.06.142.094.227.094l.006-.003Z" />
                </svg>
            </span>
            <ul className=' dark:!bg-white'>
                {
                    CoursesReducer.courseData && Array.isArray(CoursesReducer.courseData) &&
                    CoursesReducer.courseData.map((courseHeading, idx) => (
                        <li key={idx}><span className='text-white dark:!text-black text-[16px]'>{courseHeading.title}</span></li>
                    ))
                }
            </ul>
        </li>
    );
};

const mapStateToProps = (state) => ({
    CoursesReducer: state.CoursesReducer,
});

export default connect(mapStateToProps, { FetchCourses })(CourseTitle);
