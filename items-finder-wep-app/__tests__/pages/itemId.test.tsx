import React from 'react'
import { render } from '../../testUtils'
import { useFeedback } from '../../lib/providers'
import DetailPage from '../../pages/items/[id]'

describe('Home', () => { 
    it('render contents', () => { 
        const id = 'MLA796015965'
        const component = render(<DetailPage id={id} />, { wrapper: useFeedback })
    })
})