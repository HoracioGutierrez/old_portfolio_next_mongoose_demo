import { CARD_TOGGLE, CHAT_CHANGE, CHAT_CLOSE, CHAT_OPEN, DARK_TOGGLE, DEMOS_REQUEST_ERROR, DEMOS_REQUEST_PENDING, DEMOS_REQUEST_SUCCESS, DEMO_DETAIL_REQUEST_ERROR, DEMO_DETAIL_REQUEST_PENDING, DEMO_DETAIL_REQUEST_SUCCESS, DEMO_SET_CURRENT, FILTER_SEARCH_CHANGE, LIKE, NEW_TAB_HIDE, NEW_TAB_SHOW, NOTIFICATION_HIDE, NOTIFICATION_SHOW, UNLIKE } from "./actionConstants"

export const init = {
    dark: false,
    card_open: false,
    notification: {
        open: false,
        text: "",
        type: "info",
        time: 2000
    },
    demos: {
        filters : {
            search : "",
            tags : [],
            difficulty : "",
            created_at : "asc",
        },
        request: {
            pending: false,
            error: "",
            requested: false,
            full: false
        },
        list: [],
        filtered: [],
        current: {
            requested: false,
            pending: false,
            error: "",
            full: false
        }
    },
    new_tab: {
        show: false,
        index: 2,
        title: ""
    },
    chat : {
        open: false,
        pending : false,
        error : "",
        name : "",
        email : "",
        message : ""
    }
}

const reducer = (state = init, action) => {
    switch (action.type) {
        case FILTER_SEARCH_CHANGE :
            return {
                ...state,
                demos: {
                    ...state.demos,
                    filters: {
                        ...state.demos.filters,
                        search: action.value
                    },
                    filtered: state.demos.list.filter(demo => demo.title.toLowerCase().includes(action.value.toLowerCase()))
                }
            }
        case CARD_TOGGLE :
            return {
                ...state,
                card_open: !state.card_open
            }
        case CHAT_CHANGE :
            return {
                ...state,
                chat: {
                    ...state.chat,
                    ...action.value
                }
            }
        case CHAT_CLOSE :
            return {
                ...state,
                chat: {
                    ...state.chat,
                    open: false
                }
            }
        case CHAT_OPEN :
            return {
                ...state,
                chat: {
                    ...state.chat,
                    open: true
                }
            }
        case LIKE :
            return {
                ...state,
                demos: {
                    ...state.demos,
                    list: state.demos.list.map(demo => {
                        if (demo.id === action.demo.id) {
                            demo.likes++
                        }
                        return demo
                    })
                }
            }
        case UNLIKE :
            return {
                ...state,
                demos: {
                    ...state.demos,
                    list: state.demos.list.map(demo => {
                        if (demo.id === action.demo.id) {
                            demo.likes--
                        }
                        return demo
                    })
                }
            }
        case NEW_TAB_SHOW :
            return {
                ...state,
                new_tab: {
                    ...state.new_tab,
                    show: true,
                    title: action.value
                }
            }
        case NEW_TAB_HIDE :
            return {
                ...state,
                new_tab: {
                    ...state.new_tab,
                    show: false,
                    title: ""
                }
            }
        case NOTIFICATION_SHOW :
            return {
                ...state,
                notification: {
                    ...state.notification,
                }
            }
        case CHAT_CHANGE :
            return {
                ...state,
                chat : {
                    ...state.chat,
                    [action.target] : action.value
                }
            }
        case CHAT_CLOSE:
            return {
                ...state,
                chat : {    
                    ...state.chat,
                    open : false
                }
            }
        case CHAT_OPEN:
            return {
                ...state,
                chat : {    
                    ...state.chat,
                    open : true
                }
            }
        case NEW_TAB_HIDE:
            return {
                ...state,
                new_tab: {
                    ...state.new_tab,
                    show: false
                }
            }
        case NEW_TAB_SHOW:
            return {
                ...state,
                new_tab: {
                    ...state.new_tab,
                    show: true,
                    title: action.title
                }
            }
        case UNLIKE:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    current: {
                        ...state.demos.current,
                        vote_data: {
                            ...state.demos.current.vote_data,
                            current_votes: {
                                ...state.demos.current.vote_data.current_votes,
                                down: state.demos.current.vote_data.current_votes.down + 1
                            }
                        }
                    }
                }
            }
        case LIKE:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    current: {
                        ...state.demos.current,
                        vote_data: {
                            ...state.demos.current.vote_data,
                            current_votes: {
                                ...state.demos.current.vote_data.current_votes,
                                up: state.demos.current.vote_data.current_votes.up + 1
                            }
                        }
                    }
                }
            }
        case DEMO_DETAIL_REQUEST_ERROR:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    current: {
                        ...state.demos.current,
                        pending: false,
                        error: action.error
                    }
                }
            }
        case DEMO_DETAIL_REQUEST_SUCCESS:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    current: {
                        ...state.demos.current,
                        pending: false,
                        ...action.details,
                        requested: true,
                        full: true
                    }
                }
            }
        case DEMO_DETAIL_REQUEST_PENDING:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    current: {
                        ...state.demos.current,
                        pending: true
                    }
                }
            }
        case DEMO_SET_CURRENT:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    current: {
                        ...state.demos.current,
                        ...action.current,
                        requested: true
                    }
                }
            }
        case DEMOS_REQUEST_ERROR:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    request: {
                        pending: false,
                        error: action.error
                    }
                }
            }
        case DEMOS_REQUEST_SUCCESS:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    request: {
                        pending: false,
                        error: "",
                        requested: true,
                        full: true
                    },
                    list: action.demos,
                    filtered: action.demos
                }
            }
        case DEMOS_REQUEST_PENDING:
            return {
                ...state,
                demos: {
                    ...state.demos,
                    request: {
                        pending: true,
                        error: ""
                    }
                }
            }
        case NOTIFICATION_HIDE:
            return {
                ...state,
                notification: { ...init.notification }
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