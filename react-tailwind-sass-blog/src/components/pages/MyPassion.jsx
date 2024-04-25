import React from "react";
// import { Helmet } from "react-helmet";
import { Icon } from "../../icons";

const MyPassion = () => {
    return (
        <>
            {/* <Helmet>
                <title>Harshad Patil - Frontend Engg</title>
                <meta content='My Passion' name='description'/>
                <meta property='og:url' content='https://harshadpatil.com/my-passion' />
                <meta property='og:title' content='Harshad Patil'/>
                <meta property='og:image' content="http://harshadpatil.com/wp-backend/wp-content/uploads/2022/05/hp-groweasily.jpeg" />
                <meta property='og:description' content='I am Frontend Engg with 9+ experience in Web Development, I am here to share my expertise, and dynamic thinking which I have learned in the past years' />
                <meta property="og:type" content="My Passion" />
                <link rel="canonical" href="/my-passion" />
            </Helmet> */}
            <div className="xs:mt-3 xs:px-4 font-poppins myPassion-wrap bg-cover pb-32 pt-20 mt-[0px] dark:bg-darkModeBlack" style={{ backgroundImage: `url(${'http://harshadpatil.com/wp-backend/wp-content/uploads/2022/06/bg-my-passion.png'})` }}>

                <div className="max-w-5xl mx-auto ">
                    <div className="text-center">
                        <img className=" rounded-full mx-auto w-[100px]" src="http://harshadpatil.com/wp-backend/wp-content/uploads/2022/05/hp-groweasily.jpeg" width="30px" height="auto" title="Harshad Patil" alt="Harshad Patil" loading="lazy" />
                        {/* <h1 className="uk-margin-small-top">Harshad Patil</h1>   */}
                        <h2 className=" mt-4">My Passion</h2>
                    </div>
                    <ul className="flex flex-col space-y-6 mt-5">
                        <li className="bg-gradient-to-r from-pink-200 to-yellow-200 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="www.harshadpatil.com" href="https://harshadpatil.com" target="_blank">
                                <Icon iconName="icon-world" className="" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">www.harshadpatil.com</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Leafy Home" href="https://www.instagram.com/groweasily/" target="_blank">
                                <Icon iconName="icon-tree" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Leafy Home</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Shop T-shirt’s @Berawdy Site" href="https://berawdy.com/" target="_blank">
                                <Icon iconName="icon-cart" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Shop T-shirt’s @Berawdy Site</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Follow Clothing Brand @Berawdy" href="https://www.instagram.com/berawdy" target="_blank">
                                <Icon iconName="icon-shirt" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Follow Clothing Brand @Berawdy</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-600 to-yellow-600 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Procreate Artist @Smartcrayon" href="https://www.instagram.com/smartcrayon" target="_blank">
                                <Icon iconName="icon-palette" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Procreate Artist @Smartcrayon</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-700 to-yellow-700 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Traveler @Voyageur" href="https://www.instagram.com/workatiion/" target="_blank">
                                <Icon iconName="icon-map-pin" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Traveler @Voyageur</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-800 to-yellow-800 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Founder @fluidUX" href="https://www.instagram.com/ogfluidux" target="_blank">
                                <Icon iconName="icon-code" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Founder @fluidUX</p>
                            </a>
                        </li>
                        <li className="bg-gradient-to-r from-pink-900 to-yellow-900 rounded-full hover:scale-105 ease-in-out duration-300">
                            <a className="flex mx-auto py-2 pl-2" aria-label="Gamer @xdigsterx" href="https://www.instagram.com/xdigsterx" target="_blank">
                                <Icon iconName="icon-device-gamepad" />
                                <p className="w-full text-center text-white flex items-center justify-center text-[20px]">Gamer @xdigsterx</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default MyPassion;