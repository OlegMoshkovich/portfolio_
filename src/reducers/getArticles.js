export const getArticles = (state = '', action) => {
    if (action.type === 'GET_ARTICLES') {
        return { articles: actions.payload }
    }
    return state
}
