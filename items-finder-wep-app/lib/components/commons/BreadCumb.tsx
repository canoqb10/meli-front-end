import { Breadcrumbs, Link as Linked  } from '@material-ui/core'
import Link from 'next/link'
import classnames from 'classnames'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { BreadCumbProps } from '../../propTypes'

/**
 * Component of show breadcumb links
 * @params BreadCumbProps
 * @returns JSX.Element
 */
export const BreadCumb = ({ categories, separator = '›' }: BreadCumbProps): JSX.Element => {
    if (!Array.isArray(categories) || categories.length === 0 ) {
        return null
    }

    return (
        <div className="breadcumb-root">
            <Breadcrumbs separator={separator} aria-label="breadcrumb" className="breadcumb-container">
            {
                    categories.map((category, i) => (
                    <Link href={`/items?search=${category}`}>
                        <Linked color="inherit" className={classnames('breadcumb-text', { bold: i === categories.length })}>
                          {category}
                        </Linked>
                    </Link>
                ))
            }
            </Breadcrumbs>
        </div>
    )
}
export default BreadCumb