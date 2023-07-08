import React from 'react'

const HeroSection = () => {
    return (
        <>
            <div className='hero-section'>
                <div className="container grid grid-two-column">
                    <div className="section-hero-data">
                        {/* <p className='hero-top-data'></p> */}
                        <h1 className='hero-heading'>Hello Developers!</h1>
                        <p className="hero-para">
                            Google collaborates with university students who are passionate about growing developer communities.
                            Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.
                            By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
                        </p>
                        {/* <Button className='btn hireme-button' >
                            <NavLink to='/contact' >Hire Me</NavLink>
                        </Button> */}
                        <a className="btn" href="" target="_blank" title="Learn More">Learn More </a>
                    </div>
                    {/* for image */}
                    <div className="section-hero-image">
                        <picture>
                            <img src={"/images/hero.png"} alt="/" className="hero-img" />
                        </picture>
                    </div>
                </div>
            </div>
        </>
    )


}

export default HeroSection