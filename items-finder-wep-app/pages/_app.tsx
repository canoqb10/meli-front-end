

import * as React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import '@fontsource/roboto'
import 'modern-normalize'
import '../styles/main.scss'

import { Layout } from '../lib/layout/layout'
import { CssBaseline } from '@material-ui/core'


/**
 * Entry point component for the app
 * @param AppProps 
 * @returns JSX.Element
 */
export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
