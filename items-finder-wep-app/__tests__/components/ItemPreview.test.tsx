

import React from 'react'
// import { render } from '@testing-library/react'

import { render } from '../../testUtils'
import ItemPreview from '../../lib/components/items/ItemsPreview'
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
        const item = {
            id: 'ML2807653',
            title: 'Bolsa de Basura',
            price: {
                currency: 'MXN',
                amount: 20,
                decimals: 10,
            },
            picture: 'https://www.mercadolibre.com',
            condition: 'nuevo',
            free_shipping: true,
            place: 'CDMX',
            location: 'Mexico',
            sold_quantity: 30,
            description: 'Una bolsa de basura resitente',
        }
        
        const component = render(<ItemPreview item={item} />, { options: { mock } })
        const link = component.getByText(item.title)
        component.getByText(item.location)
        // fireEvent.click(link)
        // console.log('mock', mock)
        // expect(mock).
    })
})

