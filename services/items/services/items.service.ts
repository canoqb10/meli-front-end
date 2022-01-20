import {
    http,
    meliSitesURL,
    meliCategoriesURL,
    meliQueryURL,
    meliItemDetailURL,
    meliItemDescriptionURL,
} from '../utils'

/**
 * Request to MeLi API for search items
 * @param q 
 * @returns <{data: any, status:string}>
 */
export async function getItems(q: string) {
    const { data, status } = await http.get(
        `${meliSitesURL}${meliQueryURL}`,
        {
            params: {
                q,
                limit: Number(process.env.API_QUERY_MAX_RESULTS),
                offset: 0,
            }
        })
    
    return { data, status }
}

/**
 * Request to MeLi API for get categories
 * @returns <{data: any, status:string}>
 */
export async function getCategories() {
    const { data, status } = await http.get(`${meliSitesURL}${meliCategoriesURL}`)
    return { data, status }
}

/**
 * Request to MeLi API for get a category by id
 * @param id 
 * @returns <{data: any, status:string}>
 */
export async function getCategoryById(id:string) {
    const { data, status } = await http.get(`${meliCategoriesURL}/${id}`)
    return { data, status }
}

/**
 * Request to MeLi API for get an item by id
 * @param id 
 * @returns <{data: any, status:string}>
 */
export async function getItemById(id: string) {
    const { data, status } = await http.get(`${meliItemDetailURL}`.replace(':id', id))
    return { data, status }
}

/**
 * Request to MeLi API for get item description  by item id
 * @param id 
 * @returns <{data: any, status:string}>
 */
export async function getItemDescriptionById(id: string) {
    const { data, status } = await http.get(
        `${meliItemDetailURL.replace(':id', id)}${meliItemDescriptionURL}`
    )
    return { data, status }
}
