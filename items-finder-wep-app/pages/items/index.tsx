import { useEffect, useState } from 'react'
import { Paper, Divider } from '@material-ui/core'
import { Page } from '../../lib/layout'
import { searchItems } from '../../lib/services'
import { ItemPreview } from '../../lib/components/items'
import { BreadCumb, Loader } from '../../lib/components/commons'
import { SearchItemsResults, SearchPageProps } from '../../lib/propTypes'


/**
 * Components for search page
 * @param SearchPageProps 
 * @returns JSX.Element
 */
export const SearchPage = ({ search }: SearchPageProps): JSX.Element => {
    const [info, setInfo] = useState<SearchItemsResults>(null)
    async function searchResults() {
        try {
            const data = await searchItems<SearchItemsResults>('items', search)
            setInfo(data)
            
        } catch (e) {
            console.log('error', e.response)
        }
    }

    useEffect(() => {
        searchResults()
    }, [search])
    
    return (
        <Page title="Search" search={search}>
            <BreadCumb categories={info?.categories} />
            <Paper>
               {
               Array.isArray(info?.items) && info?.items.length ?
               info?.items.map((item) => {
                    return (
                        <>
                            <ItemPreview item={item} />
                            <div className="divider">
                                <Divider/>
                            </div>
                        </>
                    )
                }) : (<Loader />)
                }
            </Paper>
        </Page>
    )
}

SearchPage.getInitialProps = (ctx) => {
    const { search } = ctx.query
    
    return { search }
}

export default SearchPage