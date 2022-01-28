import React from 'react'
import { render } from '../../testUtils'
import { useFeedback } from '../../lib/providers'


import SearchPage from '../../pages/items/index'

describe('Home', () => { 
    it('render contents', () => { 
        const search = 'Bolsa negra'
        const component = render(<SearchPage search={search} />, { wrapper: useFeedback })
    })
})