import { CARD_TOGGLE, DARK_TOGGLE, NOTIFICATION_HIDE, NOTIFICATION_SHOW } from "./actionConstants"

export const init = {
    dark: false,
    card_open: false,
    notification: {
        open: false,
        text: "",
        type: "info",
        time: 2000
    }
}

const reducer = (state = init, action) => {
    switch (action.type) {
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