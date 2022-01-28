

import React from 'react'
// import { render } from '@testing-library/react'

import { render } from '../../testUtils'
import SearchBar from '../../lib/components/commons/SearchBar'
import { fireEvent } from '@testing-library/react'



const mock = jest.mock('next/router', () => ({ 
    useRouter: () => ({ 
        query: { id: '1'},
        push: (p) => {
            console.log('p', p)
            return p
        }
    })
}))

describe('Item Preview Component', () => {
    it('render contents', () => { 
        const search = 'Bolsas de mano'
        
        const component = render(<SearchBar search={search} />, { })
        const link = component.getByDisplayValue(search)
        component.getAllByPlaceholderText('Nunca dejes de buscar')
        
        // fireEvent.click(link)
        // console.log('mock', mock)
        // expect(mock).
    })
})

