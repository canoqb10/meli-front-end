import React from 'react'
import { useFeedback } from '../../lib/providers'
import { render } from '../../testUtils'


import App from '../../pages/_app'

describe('Home', () => { 
    it('render contents', () => { 
        const component = render(<App />, { wrapper: useFeedback })
    })
})