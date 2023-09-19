import React from 'react'

const Hero = () => {
    return (
        <div className="hero-content global-padding">
            <h1 className="hero-title hero-title-large dark:text-white"><span className=' md:-ml-20 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#ff7170] to-[#ffe57f] inline'>〈Learn With Me /〉</span>Amplify your programming abilities and expertise with focused learning and dedicated practice.</h1>
            <div className="subscribe-section">
            <button className="global-button bg-black dark:bg-ghost-accent-color" type="submit">Start Learning with me...</button>
                {/* <div className="subscribe-wrap">
                    <form data-members-form="subscribe" className="subscribe-form dark:bg-darkModeGray2">
                        <input data-members-email type="email" className=' placeholder-[#a4a6a6] dark:bg-darkModeGray2 dark:text-white' placeholder="Your email address" aria-label="Your email address" required />
                        <button className="global-button bg-black dark:bg-ghost-accent-color" type="submit">Subscribe</button>
                    </form>
                    <div className="subscribe-form-caption dark:text-darkModeGray1">
                        Get the email newsletter and unlock access to members-only content and updates
                    </div>
                    <div className="subscribe-alert ">
                        <small className="alert-loading global-alert dark:text-darkModeGray1">Processing your application</small>
                        <small className="alert-success global-alert dark:text-darkModeGray1">Please check your inbox and click the link to confirm your subscription.</small>
                        <small className="alert-error global-alert dark:text-darkModeGray1">There was an error sending the email</small>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Hero