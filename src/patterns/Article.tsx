import React from 'react'
import styled from 'styled-components'
import { TitleArticle, P } from '../components/typography'
import LinkNext from '../components/buttons/LinkNext'
import Post from '../core/Post'

interface tPost {
    post: Post
}

const SArticle = styled.article`
    margin-bottom: 48px;

    p {
        font-size: 14px;
    }
`

const Article = (props: tPost) => {
    const p = props.post;

    return (
        <SArticle>
            <LinkNext href={`/post/${p.getSlug}`}>
                <TitleArticle>{p.getTitle}</TitleArticle>
            </LinkNext>
            <P>{p.getDescription}</P>
        </SArticle>
    )
}

export default Article