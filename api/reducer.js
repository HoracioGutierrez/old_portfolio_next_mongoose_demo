import { CARD_TOGGLE, DARK_TOGGLE } from "./actionConstants"

export const init = {
    dark : false,
    card_open : true
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case CARD_TOGGLE : 
            return {
                ...state,
                card_open : !state.card_open
            }
        case DARK_TOGGLE : 
            return {
                ...state,
                dark : !state.dark
            }
        default:
            return init
    }
}

export default reducer