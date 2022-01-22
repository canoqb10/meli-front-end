import { useEffect, useState } from 'react'
import { Paper, Button } from '@material-ui/core'
import { Page } from '../../lib/layout'
import { getItem } from '../../lib/services'
import { BreadCumb, Loader } from '../../lib/components/commons'
import { ItemResult, DetailProps } from '../../lib/propTypes'
import { formatAmount } from '../../lib/helpers'
import { useFeedback } from '../../lib/providers'

/**
 * @description item detail page
 * @param DetailProps 
 * @returns JSX.Element
 */
export const DetailPage = ({ id } :DetailProps): JSX.Element => {
    const [info, setInfo] = useState<ItemResult>(null)
    const [loader, setLoader] = useState<boolean>(true)
    const { showMessage } = useFeedback()
    async function searchItems() {
        try {
            setLoader(true)
            const data = await getItem<ItemResult>('items', id)
            setInfo(data)
        } catch (e) {
            showMessage('Tenemos problemas al mostrar tu articulo', 'error', 5000)
            console.log('error',e)
        } finally { 
            setLoader(false)
        }
    }

    useEffect(() => {
        searchItems()
    }, [])

    function renderCondition() {
        if (info?.item?.condition === 'new') {
            return 'Nuevo'
        }
        return 'Usado'
    }

    function renderSold() {
        if (typeof info?.item?.sold_quantity !== 'undefined') {
            return ` - ${info?.item?.sold_quantity} Vendidos`
        }
        return null
    }

    return (
        <Page title="Item">
            <BreadCumb categories={info?.categories} />
            <Paper>
                {!info?.item ? (<Loader active={loader} errorMessage="Artículo no encontrado" />) : (
                    <div className="detail-root">
                        <div className="detail-buy-info">
                            <div className="detail-image">
                                <img src={info?.item?.picture} alt={info?.item?.picture} />
                            </div>
                            <div className="detail-buy">
                                <div className="detail-condition">
                                    {renderCondition()}
                                    {renderSold()}
                                </div>
                                <div className="detail-title">{info?.item?.title}</div>
                                <div className="detail-price">{formatAmount(info?.item?.price?.amount, info?.item?.price?.currency)}</div>
                                <div className="detail-btn">
                                    <Button variant="contained" color="primary">Comprar</Button>
                                </div>
                            </div>
                        </div>
                        <div className="detail-description">
                            <div>
                                <h3>Descripción del producto</h3>
                                <div className="detail-text-description">
                                    {info?.item?.description}
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                ) }
            </Paper>
        </Page>
    )
}
    
DetailPage.getInitialProps = (ctx) => {
    const { id } = ctx.query
    
    return { id }
}
export default DetailPage