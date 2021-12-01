import React from 'react'
import NavBar from '../components/Layout/Navbar'
import Navicon from '../components/Layout/Navicon'
import Link from 'next/link'

const Navbar = () => {
    return (
        <NavBar>
            <Navicon href="/">
                <a className="uk-navbar-item uk-logo">Logo</a>
            </Navicon>
            <ul className="uk-navbar-nav">
                <li className="uk-active"><Link href="/sobre">Sobre</Link></li>
                <li>
                    <a href="#">Parent</a>
                    <div className="uk-navbar-dropdown">
                        <ul className="uk-nav uk-navbar-dropdown-nav">
                            <li className="uk-active"><a href="#">Página 1</a></li>
                            <li><a href="#">Pagina 2</a></li>
                            <li><a href="#">Pagina 3</a></li>
                        </ul>
                    </div>
                </li>
                <li><a href="#">Item</a></li>
            </ul>
        </NavBar>
    )
}

export default Navbar