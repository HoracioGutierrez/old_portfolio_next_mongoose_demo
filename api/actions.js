import { CARD_TOGGLE, DARK_TOGGLE, NOTIFICATION_HIDE, NOTIFICATION_SHOW } from "./actionConstants"

export const darkToggle = () => ({ type: DARK_TOGGLE })

export const cardToggle = () => ({ type: CARD_TOGGLE })

export const showNotification = (text = "Test Notification!", tipo = "info", time = 2000) => ({
    type: NOTIFICATION_SHOW,
    text,
    tipo,
    time
})

export const hideNotification = () => ({ type: NOTIFICATION_HIDE })