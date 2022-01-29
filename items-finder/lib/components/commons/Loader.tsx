import { CircularProgress } from '@material-ui/core'
import { LoaderProps } from '../../propTypes'

/**
 *  Component by show a loader
 * @param LoaderProps
 * @returns JSX.Element
 */
export const Loader = ({ message, active, errorMessage }: LoaderProps): JSX.Element => {
  let display = (
    <>
      <CircularProgress color="primary" /> {message || 'Cargando ...'}{' '}
    </>
  )
  if (!active) {
    display = <>{errorMessage}</>
  }
  return <div className="loader">{display}</div>
}

export default Loader
