import React from 'react'


const Navbar = ({ children }) => {
    return (
        <nav className="uk-navbar-container uk-margin" uk-navbar="mode: click">
            <div className="uk-navbar-left">
                {children}
            </div>
        </nav>
    )
}

export default Navbar