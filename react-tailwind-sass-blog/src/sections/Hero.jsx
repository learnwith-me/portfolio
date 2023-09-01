import React from 'react'

const Hero = () => {
    return (
        <div class="hero-content global-padding">
            <h1 class="hero-title hero-title-large dark:text-white"><span>〈Learn With Me /〉</span> See our thoughts, stories and ideas.</h1>
            <div class="subscribe-section">
                <div class="subscribe-wrap">
                    <form data-members-form="subscribe" class="subscribe-form dark:bg-darkModeGray2">
                        <input data-members-email type="email" className=' placeholder-[#a4a6a6] dark:bg-darkModeGray2 dark:text-white' placeholder="Your email address" aria-label="Your email address" required />
                        <button class="global-button bg-black dark:bg-ghost-accent-color" type="submit">Subscribe</button>
                    </form>
                    <div class="subscribe-form-caption dark:text-darkModeGray1">
                        Get the email newsletter and unlock access to members-only content and updates
                    </div>
                    <div class="subscribe-alert ">
                        <small class="alert-loading global-alert dark:text-darkModeGray1">Processing your application</small>
                        <small class="alert-success global-alert dark:text-darkModeGray1">Please check your inbox and click the link to confirm your subscription.</small>
                        <small class="alert-error global-alert dark:text-darkModeGray1">There was an error sending the email</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero