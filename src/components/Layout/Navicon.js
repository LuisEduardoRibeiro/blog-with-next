import React from 'react'
import Link from 'next/link'

const Navicon = (props) => {
    return (
        <Link href={props.href}>
            <a className="uk-navbar-item uk-logo">{props.children}</a>
        </Link>
    )
}

export default Navicon