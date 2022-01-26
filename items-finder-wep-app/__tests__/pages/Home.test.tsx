import React from 'react'
import { render } from '@testing-library/react'
// import { render } from '../../testUtils'



import Home from '../../pages/index'

describe('Home', () => { 
    it('render contents', () => { 
        const component = render(<Home />, {})
    
        console.log('component', component)
    })
})