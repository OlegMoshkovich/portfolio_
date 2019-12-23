export const articlesFail = (state = '', action) => {
    switch (action.Type) {
        case ('GET_ARTICLES_FAIL'):
            return action.payload
        default:
            return state
    }
}