const Navbar = () => {
    return (
        <>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="/">
                            <img src="images/gdsclogo.png" alt=""/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#aboout">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a href="#event">EVENT</a>
                    </li>
                    <li className="nav-item">
                        <a href="#team">TEAM</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar