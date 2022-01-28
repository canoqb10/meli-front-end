

import React from 'react'
import { render } from '../../testUtils'
import Loader from '../../lib/components/commons/Loader'

describe('Item Preview Component', () => {
    it('if active is true', () => { 
        const message = 'cargando...'
        const active = true
        const errorMessage = 'error...'
        
        const component = render(<Loader message={message} active={active} errorMessage={errorMessage} />, { })
        component.getByText(message)
    })
    it('if active is false', () => { 
        const message = 'cargando...'
        const active = false
        const errorMessage = 'error...'
        
        const component = render(<Loader message={message} active={active} errorMessage={errorMessage} />, { })
        component.getByText(errorMessage)
        // expect().toBeDefined
    })
    
})

