import axios from 'axios'
import { ItemResult, SearchItemsResults } from '../propTypes'
import { meliMiddleEndUrl } from '../constants'




export const http = axios.create()

http.interceptors.request.use(async (config) => {
  return config
})

/**
 * Request http to API for search items
 * @param path 
 * @param query 
 * @returns Promise<SearchItemsResults>
 */
export const searchItems = async <SearchItemsResults>(
  path?:string,
  query?: string,
): Promise<SearchItemsResults> => {
  const { data } = await http.get<SearchItemsResults>(`${meliMiddleEndUrl}/${path}`, {
    params: {
      search: query
    },
  })

  return data
}

/**
 * * Request http to API for get an items by id
 * @param path 
 * @param id 
 * @returns Promise<ItemResult>
 */
export const getItem = async <ItemResult>(
  path: string,
  id: string,
): Promise<ItemResult> => {
  const { data } = await http.get<ItemResult>(`${meliMiddleEndUrl}/${path}/${id}`)
  return data
}




