import { formatAmount } from '../lib/helpers'
import { getItem, searchItems } from '../lib/services'
import { SearchItemsResults, ItemResult } from '../lib/propTypes'

describe('General functions helpers', () => { 
    it('Format an amount correctly', () => { 
        const amount = 10
        const currency = 'ARS' 
        
        const formatAmout = formatAmount(amount, currency)
        expect(formatAmout.replace(/\s/g, '')).toEqual(`${currency} ${amount}.00`.replace(/\s/g, ''))
    })
})

describe('Integration Test', () => { 
    it('Returns a properly formatted SearchItemsResults object from the /items resource', async () => {
        const data: SearchItemsResults = await searchItems('item', 'Cama perro')
        
        expect(data).toHaveProperty('author')
        expect(data).toHaveProperty('categories')
        expect(data).toHaveProperty('items')
        expect(data.items).toBeDefined()
        expect(data.categories).toBeDefined()
        expect(data.items).toBeDefined()
        expect(data.items.length).toBeGreaterThan(0)
        expect(data.categories.length).toBeGreaterThan(0)
    })
    
    it('Returns a properly formatted SearchItemsResults object from the /items resource', async () => {
        const data: ItemResult = await getItem('item', 'MLA796015965')
        
        expect(data).toHaveProperty('author')
        expect(data).toHaveProperty('categories')
        expect(data).toHaveProperty('item')
        expect(data.item).toBeDefined()
        expect(data.categories).toBeDefined()
        expect(data.categories.length).toBeGreaterThan(0)
        expect(data.item).toHaveProperty('id')
        expect(data.item).toHaveProperty('description')
        expect(data.item).toHaveProperty('free_shipping')
        expect(data.item).toHaveProperty('picture')
        expect(data.item).toHaveProperty('sold_quantity')
        expect(data.item).toHaveProperty('title')
        expect(data.item).toHaveProperty('price')
        expect(data.item.price).toHaveProperty('amount')
        expect(data.item.price).toHaveProperty('currency')
        expect(data.item.price).toHaveProperty('decimals')
      })
})