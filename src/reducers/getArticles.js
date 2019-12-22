export const getArticles = (state = { articles: 'hello' }, action) => {
    console.log('in the reducer', state)
    if (action.type === 'GET_ARTICLES') {
        return { articles: action.payload }
    }
    return state
}
