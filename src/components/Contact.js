import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='contact-section' id='contact' >
                <div className='section-heading'>Feel free to Contact Us</div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7618.272003841331!2d74.18699649999998!3d17.308986000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1826400000001%3A0x34bdd98ca25093e3!2sGovernment%20College%20of%20Engineering%2C%20Karad!5e0!3m2!1sen!2sin!4v1659791986349!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="container grid grid-two-column form-section">
                    <div className="contact-form">
                        <form action="https://formspree.io/f/mvoypnoq" method="post" className='contact-inputs'>
                            <input type="text" name="username" placeholder='Name' autoComplete='off' required className='input-item' />
                            <input type="email" name="Email" placeholder='Email' autoComplete='off' required className='input-item' />
                            <textarea name="message" cols="30" rows="10" autoComplete='off' required placeholder='Enter your query' className='input-item' />
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                    <div className="section-hero-image">
                        <picture>
                            <img src={"/images/contact.png"} alt="/" className="hero-img" />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact