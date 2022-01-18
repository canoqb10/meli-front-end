import { CircularProgress } from '@material-ui/core'
import { LoaderProps } from '../../propTypes'

/**
 *  Component by show a loader
 * @param LoaderProps 
 * @returns JSX.Element
 */
export const Loader = ({ message }: LoaderProps): JSX.Element => {
    return (
        <div className="loader"><CircularProgress color="primary" /> { message || 'Cargando ...' }</div>
    )    
}

export default Loader