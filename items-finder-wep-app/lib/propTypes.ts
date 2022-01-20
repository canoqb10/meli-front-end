/**
 * 
 * 
 * @description Module of types of properties for UI components
 * 
 * 
 */
 
export type Price = {
    currency: string
    amount: number
    decimals?: number
}
export type Author = {
    name: string
    lastname: string
}

export type Item = {
    id: string
    title: string
    price: Price
    picture: string
    condition: string
    free_shipping: boolean
    place: string
    location?: string
    sold_quantity?: number
    description?: string
}
 
export type ItemResult = {
    author: Author
    categories: Array<string>
    item: Item
}

export type SearchItemsResults = {
    author: Author,
    categories: Array<string>
    items: Array<Item>
}

export type ItemProps = {
    item: Item
}

export type BreadCumbProps = {
    categories: Array<string>
    separator?: JSX.Element
}

export type LoaderProps = {
    message?: string
}

export type SearchBarProps = { search: string }
  
export type LayoutProps = {
    window?: () => Window
}

export type PageProps = {
    title: string
    search?: string
}

export type DetailProps = {
    id: string
}
export type SearchPageProps = {
    search: string
}