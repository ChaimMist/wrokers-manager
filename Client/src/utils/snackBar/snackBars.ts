import {enqueueSnackbar} from "notistack";


export const snackBarSuccess = (message: string): void => {
    enqueueSnackbar(message, {
        variant: 'success',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
    })
}

export const snackBarError = (message: string): void => {
    enqueueSnackbar(message, {
        variant: 'error',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
    })
}

export const snackBarWarning = (message: string): void => {
    enqueueSnackbar(message, {
        variant: 'warning',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
    })
}

export const snackBarInfo = (message: string): void => {
    enqueueSnackbar(message, {
        variant: 'info',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
    })
}

export const snackBarDefault = (message: string) => {
    enqueueSnackbar(message, {
        variant: 'default',
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
    })
}