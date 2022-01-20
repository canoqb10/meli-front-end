import 'dotenv/config'

export const apiPort = Number(process.env.API_PORT) || 3001
export const queryMaxResults = Number(process.env.API_QUERY_MAX_RESULTS) || 4
export const meliBaseURL = process.env.MELI_BASE_URL || 'https://api.mercadolibre.com/'
export const meliSitesURL = process.env.MELI_SITES_URL || 'sites/MLA/'
export const meliQueryURL = process.env.MELI_QUERY_URL || 'search'
export const meliCategoriesURL = process.env.MELI_CATEGORIES_URL || 'categories'
export const meliItemDetailURL = process.env.MELI_ITEM_DETAIL_URL || 'items/:id'
export const meliItemDescriptionURL = process.env.MELI_ITEM_DESCRIPTION_URL || '/description'
export const meliItemNotFoundImgURL = process.env.MELI_ITEM_NOT_FOUND_IMG || ''
export const prefix = process.env.PREFIX || 'items'
