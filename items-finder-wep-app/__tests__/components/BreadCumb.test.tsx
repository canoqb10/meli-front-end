

import React from 'react'
import { render } from '../../testUtils'
import BreadCumb from '../../lib/components/commons/BreadCumb'
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
        const categories = ['Bolsas', 'Mandado', 'Basura', 'Bolsos', 'Cocina']
        const separator = '*'
        
        const component = render(<BreadCumb categories={ categories } separator={separator} />, { })
        component.getByText(categories[0])
        component.getByText(categories[4])
        const separatorEls = component.getAllByText(separator)
        expect(separatorEls.length).toBe(categories.length - 1)
        // fireEvent.click(link)
        // console.log('mock', mock)
        // expect(mock).
    })
})

