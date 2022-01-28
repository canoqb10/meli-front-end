import React from 'react'
import { render } from '../../testUtils'
import { useFeedback } from '../../lib/providers'


import Home from '../../pages/index'

describe('Home', () => { 
    it('render contents', () => { 
        const component = render(<Home />, { wrapper: useFeedback })
    })
})