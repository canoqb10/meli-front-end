import { createContext, useContext, useState, PropsWithChildren } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert'
import { SnackbarProps, FeedbackContextProps } from '../propTypes'

const Alert = (props)  => {
    return (<MuiAlert elevation={6} variant="filled" {...props} />)
}

export const FeedbackContext = createContext<FeedbackContextProps>(null)
  
export const useFeedback = (): FeedbackContextProps => useContext(FeedbackContext)

export const FeedbackProvider = ({ children }: PropsWithChildren<any>): JSX.Element => { 
  const [snackbar, setSnackbar] = useState<SnackbarProps>({
    message: '',
    value: false,
    duration: 6000,
    type: 'info',
  })
    
    const value = {
        ...snackbar,
        showMessage(message, type, duration) {
            setSnackbar({
              value: true,
              message,
              type,
              duration
            })
        }
    }

    const close = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
          return
        }
    
        setSnackbar({
          message: '',
          value: false,
          duration: 6000,
          type: 'info',
        })
    }
    
    return <FeedbackContext.Provider value={value}>
        <Snackbar
        open={snackbar.value}
        onClose={close}
        autoHideDuration={6000}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      >
        <Alert elevation={6} variant="filled" severity={snackbar.type} onClose={close}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </FeedbackContext.Provider>
}