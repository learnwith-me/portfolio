import React, { Fragment, useEffect } from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { connect, useSelector } from 'react-redux';
import { FetchCourses } from '../../api/FetchCourses';
import { Link, useParams } from 'react-router-dom';
import LearnImage from '../../assets/learning.svg';
import LearnImage2 from '../../assets/learning-2.svg';
import DownRightArrow from '../../assets/down-right-arrow.svg';
import DownLeftArrow from '../../assets/up-left-arrow.svg';
import RightChevRed from '../../assets/right-chevron-red.png'
import RightChevYellow from '../../assets/right-chevron-yellow.png'
import LoginModal from '../auth/login/LoginModal';


const SingleCourse = ({ FetchCourses, CoursesReducer, loading, error }) => {

    const { slug } = useParams(),
        authUser = useSelector((state) => state.auth.user);

    useEffect(() => {
        FetchCourses('courses');
    }, []);

    return (
        <>
            {loading ? (
                <div className="loaders absolute top-0 left-0 right-0 bottom-0 w-full z-[5] overflow-hidden bg-black opacity-80 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-semibold">Loading...</h2>
                    <p className="w-1/3 text-center text-white hidden md:block !text-[18px]">This may take a few seconds, please don't close this page.</p>
                </div>
            ) : error ? (
                <p>Error1</p>
            ) : (
                <>
                    <div className=" bg-[#fafafa]]">
                        {
                            CoursesReducer.courseData.map((sCourseD, index) => {
                                return (
                                    <Fragment key={index}>
                                        {
                                            slug === sCourseD.slug
                                                ?
                                                <>
                                                    {/* <Helmet>
                                                <title>{sCourseD.title}</title>
                                                <meta name="description" content={sCourseD.excerpt} />
                                                <meta property='og:url' content={`https://harshadpatil.com/course/${sCourseD.slug}`} />
                                                <meta property='og:title' content={sCourseD.title} />
                                                <meta property="og:description" content={sCourseD.excerpt} />
                                                <meta property="og:image" content={sCourseD.featured_image.medium_large} />
                                                <link rel="canonical" href={`https://harshadpatil.com/course/${sCourseD.slug}`} />
                                                <meta property="og:type" content="article" />
                                            </Helmet> */}
                                                    <div className="md:mx-40 px-5 md:px-0 pt-8 pb-7 md:pb-20 text-center md:text-left">
                                                        <p className='text-[16px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7170] to-[#ffe57f] inline'>〈Learn With Me /〉</p>
                                                        <h1 className="text-center md:text-left mt-0 mb-4 text-[24px] md:text-[36px] font-semibold text-black font-poppins capitalize">
                                                            {sCourseD.title}
                                                        </h1>
                                                        <p className='text-[#25265eab] text-lg mb-4' dangerouslySetInnerHTML={{ __html: sCourseD.thoughts_on_the_course }} />
                                                        <span className='text-[#f54f64] font-normal text-lg hero-underline'>
                                                            What will I learn from this course?
                                                        </span>
                                                        <span id="learn-with-me" className="mb-8"></span>
                                                    </div>
                                                </>
                                                :
                                                ""
                                        }
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                    <div className="md:mx-40 font-poppins pt-[80px]">
                        <div className='grid grid-cols-100'>
                            <div className='px-5 md:px-0'>
                                {
                                    CoursesReducer.courseData.map((sCourseD, index) => {
                                        return (
                                            <Fragment key={index}>
                                                {
                                                    slug === sCourseD.slug
                                                        ?
                                                        sCourseD?.label_1
                                                            ?
                                                            <div className=' mb-20 relative'>
                                                                <div className='grid grid-cols-100 md:grid-cols-50/50 rounded-xl transition-all border border-[#d3dce6] border-solid pt-8 pr-7 pb-7 pl-8'>
                                                                    <div className='pl-0 py-[1.75rem] px-[2rem] md:pl-5 md:py-5 md:px-5 first:border-b md:first:border-b-0 md:first:border-r border-[#d3dce6] border-solid first:pr-0 md:first:pr-8'>
                                                                        <div className='flex items-start'>
                                                                            <div className='mr-4 min-w-32 h-8 relative learn__image'>
                                                                                <img className='relative' src={LearnImage} />
                                                                            </div>
                                                                            <div>
                                                                                <p className='text=[#25265e] font-semibold mb-2 text-base'>
                                                                                    {sCourseD.label_1}
                                                                                </p>
                                                                                <p className='text-[#25265eab] font-medium text-sm mb-0'>
                                                                                    {sCourseD.label_1_desc}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='pr-0 py-[2rem] px-[2rem] md:px-5 md:py-5 last:pl-0 md:last:pl-11'>
                                                                        <div className='flex items-start'>
                                                                            <div className='mr-4 min-w-32 h-8 relative learn__image'>
                                                                                <img className='relative' src={LearnImage2} />
                                                                            </div>
                                                                            <div>
                                                                                <p className='text=[#25265e] font-semibold mb-2 text-base'>
                                                                                    {sCourseD.label_2}
                                                                                </p>
                                                                                <p className='text-[#25265eab] font-medium text-sm mb-3'>
                                                                                    {sCourseD.label_2_desc}
                                                                                </p>
                                                                                <p className='text-[#f54f64] mb-0 text-sm font-medium'>
                                                                                    What's in the course?
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <img className='absolute left-20 md:left-3 z-1 top-[-111px] md:top-[-155px] h-[138px] md:h-[200px] w-[179px]' src={DownRightArrow} alt="" />
                                                                <img className='absolute right-[120px] md:right-[180px] z-1 top-[336px] md:top-[142px] h-[201px] w-[100px]' src={DownLeftArrow} alt="" />
                                                            </div>
                                                            :
                                                            ""
                                                        :
                                                        ""
                                                }
                                            </Fragment>
                                        )
                                    })
                                }
                                {
                                    CoursesReducer.courseData.map((sCourseD, index) => {
                                        // console.log(sCourseD)
                                        const cats = sCourseD.chapters.reduce((catMemo, { chapter, subject, subject_description, heading }) => {
                                            (catMemo[chapter] = catMemo[chapter] || []).push(subject, subject_description, heading);
                                            return catMemo;
                                        }, {});
                                        //   console.log("chapters", cats);
                                        const chapterNames = Object.keys(cats);
                                        const chapters = chapterNames.map((name) => {
                                            return cats[name];
                                        });
                                        //   console.log("chapters", chapters);
                                        return (
                                            <Fragment key={index}>
                                                {
                                                    slug === sCourseD.slug
                                                        ?
                                                        <>
                                                            {
                                                                chapters.map((ctas, i) => {
                                                                    // console.log("CTAS ->", ctas)
                                                                    return (
                                                                        <div key={i} className={` mb-2 border border-[#d3dce6] border-solid ${i >= 1 && !authUser?.token ? "p-3" : ""}`}>
                                                                            {
                                                                                i >= 2 && !authUser?.token
                                                                                    ?
                                                                                    // <Link to={'/login'} className='text-[#41ba3b] pr-1 text-xl font-medium border-b border-[#d3dce6] border-solid pt-[10px] pb-[15px]'> Login  </Link>
                                                                                    <LoginModal openModel={true} loginBtnText={`Login to Read More Chapters`} loginToReadCourse={`Login to read course`} />
                                                                                    :


                                                                                    <Disclosure>
                                                                                        {({ open }) => (
                                                                                            <>
                                                                                                <Disclosure.Button className="flex w-full justify-between px-4 py-2 pb-0 text-left text-sm font-medium hover:bg-[#fafafa] focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                                                                    <span className='text-[#25265e] pr-1 text-xl font-normal border-b border-[#d3dce6] border-solid pt-[10px] pb-[15px] flex items-center gap-3'> <img className={`${open ? 'rotate-90 transform' : ''} h-4 w-4`} src={RightChevRed} alt="" />   <span className='pr-1'>Chapter {i + 1}</span> <span className=' pl-10'>{ctas[2]}</span> </span>
                                                                                                </Disclosure.Button>
                                                                                                <Transition
                                                                                                    show={open}
                                                                                                    className="transition-all duration-300"
                                                                                                    enterFrom="transform opacity-0 max-h-[0px]"
                                                                                                    enterTo="transform opacity-100"
                                                                                                    leaveFrom="transform opacity-50"
                                                                                                    leaveTo="transform opacity-0"
                                                                                                >
                                                                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">

                                                                                                        <ul className='child-course'>
                                                                                                            {


                                                                                                                <NestCourse data={ctas} />

                                                                                                            }

                                                                                                        </ul>
                                                                                                    </Disclosure.Panel>
                                                                                                </Transition>
                                                                                            </>
                                                                                        )}
                                                                                    </Disclosure>

                                                                            }
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </>
                                                        :
                                                        ""
                                                }

                                            </Fragment>
                                        )
                                    })
                                }
                            </div>
                            <div></div>
                        </div>

                    </div>
                </>
            )}
        </>
    );
};

export const NestCourse = ({ data }) => {
    const filteredData = data.filter((_, index) => (index + 1) % 3 !== 0);

    const pairs = [];
    for (let i = 0; i < filteredData.length; i += 2) {
        pairs.push(filteredData.slice(i, i + 2));
    }

    return (
        <div>
            {pairs.map((pair, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex w-full justify-between py-2 pb-0 text-left text-sm font-medium cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                <span className='text-[#25265e] pr-1 text-xl font-normal border-b border-[#d3dce6] border-solid pt-[10px] pb-[15px] flex items-center gap-3'> <img className={`${open ? 'rotate-90 transform' : ''} h-3 w-3`} src={RightChevYellow} alt="" />  {pair[0]} </span>
                            </Disclosure.Button>
                            <Transition
                                show={open}
                                className="transition-all duration-300"
                                enterFrom="transform opacity-0 max-h-[0px]"
                                enterTo="transform opacity-100"
                                leaveFrom="transform opacity-50"
                                leaveTo="transform opacity-0"
                            >
                                <Disclosure.Panel>
                                    <p dangerouslySetInnerHTML={{ __html: pair[1] }} />
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    CoursesReducer: state.CoursesReducer,
    loading: state.PostReducer.loader,
    error: state.PostReducer.error,
});

export default connect(mapStateToProps, { FetchCourses })(SingleCourse);
