


const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                {/* <h1 className="header__title">Logo</h1> */}
                <img src="/new-logo.svg" alt="Logo" />

                <nav className="navbar">
                    <a className="navbar__link" href="#">Enlace 1</a>
                    <a className="navbar__link" href="#">Enlace 2</a>
                    <a className="navbar__link" href="#">Enlace 3</a>
                </nav>
            </div>

        </header>

    )
}

export default Navbar