export const getArticles = (state = '', action) => {
    if (action.type === 'GET_ARTICLES') {
        return { articles: action.payload }
    }
    return state
}
