export const init = {
    dark : false
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case "DARK_TOGGLE" : 
            return {
                ...state,
                dark : !state.dark
            }
        default:
            return init
    }
}

export default reducer