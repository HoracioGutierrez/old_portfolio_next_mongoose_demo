import { CARD_TOGGLE, DARK_TOGGLE, DEMOS_REQUEST_ERROR, DEMOS_REQUEST_PENDING, DEMOS_REQUEST_SUCCESS, NOTIFICATION_HIDE, NOTIFICATION_SHOW } from "./actionConstants"

export const init = {
    dark: false,
    card_open: false,
    notification: {
        open: false,
        text: "",
        type: "info",
        time: 2000
    },
    demos : {
        request : {
            pending : false,
            error : ""
        },
        list : []
    }
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case DEMOS_REQUEST_ERROR :
            return {
                ...state,
                demos : {
                    ...state.demos,
                    request : {
                        pending : false,
                        error : action.error
                    }
                }
            }
        case DEMOS_REQUEST_SUCCESS :
            return {
                ...state,
                demos : {
                    ...state.demos,
                    request : {
                        pending : false,
                        error : ""
                    },
                    list : action.demos
                }
            }
        case DEMOS_REQUEST_PENDING :
            return {
                ...state,
                demos : {
                    ...state.demos,
                    request : {
                        pending : true,
                        error : ""
                    }
                }
            }
        case NOTIFICATION_HIDE:
            return {
                ...state,
                notification : { ...init.notification }
            }
        case NOTIFICATION_SHOW:
            return {
                ...state,
                notification: {
                    open: true,
                    text: action.text,
                    type: action.tipo,
                    time: action.time
                }
            }
        case CARD_TOGGLE:
            return {
                ...state,
                card_open: !state.card_open
            }
        case DARK_TOGGLE:
            return {
                ...state,
                dark: !state.dark
            }
        default:
            return init
    }
}

export default reducer