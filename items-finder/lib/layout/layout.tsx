import { PropsWithChildren } from 'react'
import Head from 'next/head'

import { LayoutProps } from '../propTypes'
import { meliIcon } from '../constants'

console.log('meliIcon', meliIcon)
/**
 * Create a template layout for app
 * @param PropsWithChildren<MainLayoutProps>
 * @returns JSX.Element
 */
export const Layout = ({ children }: PropsWithChildren<LayoutProps>): JSX.Element => {
  return (
    <div id="layout-container">
      <Head>
        <>
          <title>MELI-FINDER</title>
          <link rel="icon" href={meliIcon} />
        </>
      </Head>
      <main id="layout-main">
        <div id="layout-toolbar" />
        {children}
      </main>
    </div>
  )
}
