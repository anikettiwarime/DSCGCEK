import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="contact-short-section">
                <div className="contact-short">
                    <div className='grid grid-two-column'>
                        <div>
                            <h3>Ready to get started</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div className='contact-short-btn'>
                            <a href="" className='btn' >Get Started</a>

                        </div>
                    </div>
                </div>
            </div>

            <footer>
                <div className="container grid grid-four-column">
                    {/* 1st Column */}
                    <div className="footer-about">
                        <h3>Aniket Tiwari</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, minus!</p>
                    </div>

                    {/* 2nd column */}
                    <div className="footer-subscribe">
                        <h3>Subscribe to get in touch</h3>
                        <form action="#">
                            <input type="email" name="email" placeholder='Email' required autoComplete='off' className='input-item' />
                            <input type="submit" className='btn' value="Subscribe" />
                        </form>
                    </div>

                    {/* 3rd column */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social-icons">
                            <div>
                                <a href="" target="_blank" className="fa-brands fa-linkedin icons"></a>
                            </div>

                            <div>
                                <a href="" target="_blank" className="fa-brands fa-instagram icons"></a>
                            </div>

                            <div>
                                < a href="" target="_blank" className="fa-brands fa-github icons" />
                            </div>
                        </div>
                    </div>
                    {/* 4th column */}
                    <div className="footer-about">
                        <h3>Call Us</h3>
                        <p>+91 838XXXX553</p>
                    </div>
                </div>

                <div className="footer-bottom-section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>
                            @{new Date().getFullYear()} GDSC GCEK. All Rights Reserved.
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
