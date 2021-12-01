import React from 'react'
import styled from 'styled-components'


const STitle = styled.h1`
    font-size: 36px;
    color: blue;
`
export const Title = (props) => {
    return (
        <STitle {...props}>{props.children}</STitle>
    )
}


const STitleArticle = styled.label`
    font-size: 24px;
    font-weight: bold;
    color: #000;
    cursor: inherit;
`
export const TitleArticle = (props) => {
    return (
        <STitleArticle {...props}>{props.children}</STitleArticle>
    )
}


const SP = styled.p`
    font-size: 12px;
    color: #444;
`
export const P = (props) => {
    return (
        <SP {...props}>{props.children}</SP>
    )
}