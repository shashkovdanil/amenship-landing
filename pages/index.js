import React from 'react'
import Head from 'next/head'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/core'

const Title = styled.h1`
  color: white;
`

export default () => {
  return (
    <React.Fragment>
      <Global
        styles={css`
          html,
          body {
            padding: 3rem 1rem;
            margin: 0;
            background: black;
            min-height: 100%;
            font-family: Helvetica, Arial, sans-serif;
            font-size: 24px;
          }
        `}
      />
      <Head>
        <title>Amenship</title>
      </Head>
      <div>
        <Title>AMENSHIP</Title>
      </div>
    </React.Fragment>
  )
}
