import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const A = styled.a`
    &:hover {
        border-bottom-width: 1px;
        border-bottom-style: dotted;
        cursor: pointer; 
    }
`

const LinkNext = (props) => {
    return (
        <Link className="uk-link-heading" href={props.href} {...props}>
            <A>{props.children}</A>
        </Link>
    )
}

export default LinkNext