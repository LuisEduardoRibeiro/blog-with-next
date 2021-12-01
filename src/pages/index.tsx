import React from 'react'
import Container from '../components/Layout/Container'
import { Title, P } from '../components/typography'
import Article from '../patterns/Article'

import Post from '../core/Post'

export default function Home() {

  const posts = [
    new Post('1', 'Post 1', 'post-10', 'Texto do post'),
    new Post('2', 'Post 2', 'post-2', 'Texto do post'),
    new Post('3', 'Post 3', 'post-3', 'Texto do post'),
    new Post('4', 'Post 4', 'post-4', 'Texto do post'),
  ]

  const renderArticles = posts.map((p) => <Article key={p.getId} post={p} />)

  return (
    <Container>
      <Title>Página inicial do blog em next</Title>
      <P>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`}</P>
      <hr />
      {renderArticles}
    </Container>
  )
}
