import React from 'react'
import Router from 'next/router'
import { useFeedback } from '../../lib/providers'
import { render } from '../../testUtils'

import App from '../../pages/_app'
import Index from '../../pages/index'

describe('App Page', () => {
  it('render contents', () => {
    const component = render(<App Component={Index} pageProps={{ router: Router }} />, {
      wrapper: useFeedback,
      options: { router: Router },
    })
    expect(component).toHaveProperty('container')
  })
})
