import Link from 'next/link'
import { ItemProps } from '../../propTypes'
import { formatAmount } from '../../helpers'
/**
 * Component to show a item into results section
 * @params ItemProps
 * @returns JSX.Element
 */
export const ItemPreview = ({ item }: ItemProps) => {
    return (
        <>
            <Link href={`/items/${item.id}`}>
                <div className="item-preview-root">
                    <div className="item-preview-img">
                        <img src={item?.picture} alt={item?.picture} />
                    </div>
                    <div className="item-preview-description">
                        <div>
                            {formatAmount(item?.price?.amount, item?.price?.currency)}
                            {' '}
                            {item.free_shipping && <img src="assets/ic_shipping.png" alt="assets/ic_shipping.png" />}
                        </div>
                        <div>{item?.title}</div>
                    </div>
                    <div className="item-preview-place">
                        {item?.location}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ItemPreview