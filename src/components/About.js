import React from 'react'

const About = () => {
    return (
        <div className='about-section' id="aboout" >
            <div className="section-heading">
                About the Community
            </div>
            <div className="container grid grid-two-column">
                {/* for image */}
                <div className="section-hero-image">
                    <picture>
                        <img src={"/images/about.png"} alt="/" className="hero-img" />
                    </picture>
                </div>

                <div className="section-hero-data">
                    <div className='hero-top-data'>
                        <img src="/images/gdsclogo.png" alt="" />
                    </div>
                    {/* <h1 className='hero-heading'>Hello Developers!</h1> */}
                    <p className="hero-para">
                        GDSC GCEK is a club where we learn and create innovative stuff together with other inquisitive developers and exhilarate everyone to their core.
                        The motive is to create an ideal environment for learners in and around the campus.
                    </p>
                    {/* <Button className='btn hireme-button' >
                        <NavLink to='/contact' >Hire Me</NavLink>
                    </Button> */}
                    <a className="btn" href="" target="_blank" title="Learn More">Learn More </a>
                </div>
            </div>
        </div>
    )
}

export default About