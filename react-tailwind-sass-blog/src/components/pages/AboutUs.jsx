import React from 'react'
import Logo from "../../assets/img/m-hp.jpg";

const AboutUs = () => {
    return (
        <>
            <div className=" font-poppins px-7 md:px-[unset] dark:bg-darkModeBlack">
                <div className="mx-auto w-fit flex justify-center">
                    <img className="rounded-full w-[30%]" src={Logo} width="152" height="40" alt="Harshad Patil" title="Harshad Patil" loading="lazy" />
                </div>
                <h1 className="text-[50px] text-center font-light xs:font-light xs:text-xl mb-0 dark:text-white">
                    <em className="xs:-mt-5 xs:text-shadow-m-2xl -mt-[120px] -tracking-wider font-bold not-italic block text-shadow-2xl drop-shadow-3xl text-[148px] dark:text-white dark:drop-shadow-[2px_0px_rgba(0,0,0,1)] drop-shadow-[2px_0px_rgba(225,225,225,1)]"> Hi.</em>
                    I am Harshad Patil
                </h1>
                <h3 className="text-[50px] text-center font-bold xs:mt-0 dark:text-white">I am a   <span className="words-wrapper"><strong className="is-hidden font-semibold">Frontend Developer</strong></span></h3>
                <p className=" mt-3 text-center font-light xs:font-light xs:text-xl dark:text-white md:mx-40">
                    from Mumbai, India . <strong className=" font-medium underline">Currently working at a Tickled Media Pvt. Ltd</strong>. In my spare time I enjoy taking care of the plants, gaming, Reading, Learning and building my own projects. My preferred tools are TailwindCss, React JS, Javascript, Jquery, HTML5, CSS3, SASS.
                </p>
            </div>

            <div className="!mt-28 font-poppins px-7 md:px-[unset] hidden">
                <div className="grid grid-cols-100 md:grid-cols-2 grid-rows-1 xs:grid-cols-1 gap-14 xs:px-4">
                    <div>
                        <section>
                            <h2 className="font-bold border-l-4 border-gray-900 pl-3">WORK EXPERIENCE</h2>
                            <div>
                                <h3 className="text-3xl pl-4 font-medium mt-2">• Tickled Media Pvt. Ltd.</h3>
                                <h4 className=" text-2xl pl-4 font-semibold mt-0">Front End Engineer</h4>
                                <span className="text-2xl pl-4 italic block underline">Oct 2018 - Present</span>
                                <span className="text-2xl font-medium pl-4 block mt-2 underline">About Company:</span>
                                <p className="pl-4 block mt-1 text-justify">Tickled media is the subsidiary of theAsianParent, Mamas Choice and Project Side-kicks.</p>
                                {/* <p className="pl-4 block">The <strong>theAsianParent</strong> website is developed in react JS. <strong>Mamas Choice</strong> website is developed in Wordpress and the <strong>Project Side-kicks</strong> website developed in vanilla HTML5, CSS3 and Bootstrap</p> */}
                                <p className="pl-4 block text-justify">The <strong>theAsianParent</strong> website is developed in react JS. TheAsianParent is parenting blogging website, where different article are placed related to pregnancy.</p>
                                <p className="pl-4 block text-justify">TheAsianParent community website is community form of theAsianParent, where mother can communicate with other community.</p>
                                <a href="http://sg.theasianparent.com/" target="_blank" aria-label="harshadpatil.com" className=" text-lg underline italic pl-4">URL: http://sg.theasianparent.com/</a>
                            </div>

                        </section>
                        <section className=" mt-10">
                            <h2 className="font-bold border-l-4 border-gray-900 pl-3 uppercase">Education</h2>
                            <div>
                                <h3 className="text-3xl pl-4 font-medium mt-2">• Master of Science in Information Technology (MSc IT).</h3>
                                <h4 className=" text-2xl pl-4 font-semibold mt-0">Mumbai University</h4>
                                <span className="text-2xl pl-4 italic block underline">2010 - 2013</span>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-3xl pl-4 font-medium mt-2">• Bachelor of Science in Information Technology (BSc IT).</h3>
                                <h4 className=" text-2xl pl-4 font-semibold mt-0">Mumbai University</h4>
                                <span className="text-2xl pl-4 italic block underline">2006 - 2009</span>
                            </div>
                        </section>
                    </div>

                    {/* col 2 */}
                    <div>
                        <h2 className="font-bold border-l-4 border-gray-900 pl-3">SKILLS</h2>
                        <div className="space-x-3 mt-5 flex felx-col flex-wrap gap-y-3 xs:justify-center xs:items-center  pl-4">
                            <span className="hp-skill-tags">React Js</span>
                            <span className="hp-skill-tags">Javascript</span>
                            <span className="hp-skill-tags">Jquery</span>
                            <span className="hp-skill-tags">TailwindCss</span>
                            <span className="hp-skill-tags ">Bootstrap</span>
                            <span className="hp-skill-tags">Sass</span>
                            <span className="hp-skill-tags">Css3</span>
                            <span className="hp-skill-tags">HTML5</span>
                        </div>

                        <div className="mt-10">
                            <h2 className="font-bold border-l-4 border-gray-900 pl-3">PRPGRAMMING SKILLS</h2>
                            <div className="space-x-3 mt-5 flex felx-col flex-wrap gap-y-3 xs:justify-center xs:items-center pl-4">
                                <span className="hp-skill-tags">PHP</span>
                                <span className="hp-skill-tags">WordPress</span>
                                <span className="hp-skill-tags">MySQL</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="font-bold border-l-4 border-gray-900 pl-3">TOOL SETS</h2>
                            <div className="space-x-3 mt-5 flex felx-col flex-wrap gap-y-3 xs:justify-center xs:items-center  pl-4">
                                <span className="hp-skill-tags">GIT</span>
                                <span className="hp-skill-tags">Jira Atlassian</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="font-bold border-l-4 border-gray-900 pl-3">IDE</h2>
                            <div className="space-x-3 mt-5 flex felx-col flex-wrap gap-y-3 xs:justify-center xs:items-center  pl-4">
                                <span className="hp-skill-tags">Sublime</span>
                                <span className="hp-skill-tags">VS Code</span>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="font-bold border-l-4 border-gray-900 pl-3">DESIGNING TOOL</h2>
                            <div className="space-x-3 mt-5 flex felx-col flex-wrap gap-y-3 xs:justify-center xs:items-center  pl-4">
                                <span className="hp-skill-tags">Photoshop 2022</span>
                            </div>
                        </div>
                    </div>
                    {/* end Col 2 */}
                </div>
            </div>
        </>
    )
}

export default AboutUs