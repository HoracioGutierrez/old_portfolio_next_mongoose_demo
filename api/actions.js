import { CARD_TOGGLE, DARK_TOGGLE, DEMOS_REQUEST_ERROR, DEMOS_REQUEST_PENDING, DEMOS_REQUEST_SUCCESS, NOTIFICATION_HIDE, NOTIFICATION_SHOW } from "./actionConstants"

export const darkToggle = () => ({ type: DARK_TOGGLE })

export const cardToggle = () => ({ type: CARD_TOGGLE })

export const showNotification = (text = "Test Notification!", tipo = "info", time = 2000) => ({
    type: NOTIFICATION_SHOW,
    text,
    tipo,
    time
})

export const hideNotification = () => ({ type: NOTIFICATION_HIDE })

export const demoRequestPending = () => ({ type: DEMOS_REQUEST_PENDING })

export const demoRequestSuccess = demos => ({ type: DEMOS_REQUEST_SUCCESS, demos })

export const demoRequestError = error => ({ type: DEMOS_REQUEST_ERROR, error })