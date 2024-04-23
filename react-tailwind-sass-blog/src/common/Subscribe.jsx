import React from 'react'

const Subscribe = () => {
    return (
        <div className="footer-subscribe">
            <h3 className="global-title dark:text-white">Subscribe to <span>new posts</span></h3>
            <div className="subscribe-section">
                <div className="subscribe-wrap">
                    <form data-members-form="subscribe" className="subscribe-form dark:bg-darkModeGray2">
                        <input
                            data-members-email
                            type="email"
                            placeholder="Your email address"
                            aria-label="Your email address"
                            required
                            className='placeholder-[#a4a6a6] dark:bg-darkModeGray2 dark:text-white'
                        />
                        <button className="global-button bg-black dark:bg-ghost-accent-color" type="submit">
                            Subscribe
                        </button>
                    </form>
                    <div className="subscribe-alert">
                        <small className="alert-loading global-alert"
                        >Processing your application</small
                        >
                        <small className="alert-success global-alert"
                        >Please check your inbox and click the link to confirm
                            your subscription.</small
                        >
                        <small className="alert-error global-alert"
                        >There was an error sending the email</small
                        >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe