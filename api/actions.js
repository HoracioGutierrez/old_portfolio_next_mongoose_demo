import { CARD_TOGGLE, CHAT_CHANGE, CHAT_CLOSE, CHAT_OPEN, DARK_TOGGLE, DEMOS_REQUEST_ERROR, DEMOS_REQUEST_PENDING, DEMOS_REQUEST_SUCCESS, DEMO_DETAIL_REQUEST_ERROR, DEMO_DETAIL_REQUEST_PENDING, DEMO_DETAIL_REQUEST_SUCCESS, DEMO_SET_CURRENT, FILTER_SEARCH_CHANGE, LIKE, NEW_TAB_HIDE, NEW_TAB_SHOW, NOTIFICATION_HIDE, NOTIFICATION_SHOW, UNLIKE } from "./actionConstants"

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

export const demoSetCurrent = demo => ({ type: DEMO_SET_CURRENT, current: demo })

export const demoDetailRequestPending = () => ({ type: DEMO_DETAIL_REQUEST_PENDING })

export const demoDetailRequestSuccess = details => ({ type: DEMO_DETAIL_REQUEST_SUCCESS, details })

export const demoDetailRequestError = error => ({ type: DEMO_DETAIL_REQUEST_ERROR, error })

export const sendLike = () => ({ type: LIKE })

export const sendUnlike = () => ({ type: UNLIKE })

export const showNewTab = title => ({ type: NEW_TAB_SHOW, title })

export const hideNewTab = () => ({ type: NEW_TAB_HIDE })

export const chatOpen = () => ({ type: CHAT_OPEN }) 

export const chatClose = () => ({ type: CHAT_CLOSE })

export const chatChange = (target,value) => ({ type: CHAT_CHANGE, target, value })

export const filterSearchChange = value => ({ type: FILTER_SEARCH_CHANGE, value })