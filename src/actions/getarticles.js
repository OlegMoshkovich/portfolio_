
export function getArticlesPolitics(articles) {
    return { type: 'GET_ARTICLES_POLITICS', payload: articles }
}
export function getArticlesArt(articles) {
    return { type: 'GET_ARTICLES_ART', payload: articles }
}
export function getArticlesTech(articles) {
    return { type: 'GET_ARTICLES_TECH', payload: articles }
}
export function getArticlesFail(payload) {
    return { type: 'GET_ARTICLES_FAIL', payload }
}

export const fetchArticles = (searchTerm) => dispatch => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=LhjEBx8TxE98grgsu312D8vRwatwxrWo`)
        .then(resp => resp.json())
        .then(data => data.response)
        .then(data => data.docs)
        .then(data => {
            if (searchTerm === 'politics') {
                dispatch(getArticlesPolitics(data))
            }
            if (searchTerm === 'technology') {
                dispatch(getArticlesTech(data))
            }
            if (searchTerm === 'art') {
                dispatch(getArticlesArt(data))
            }

        }).catch((function (error) {
            console.log('error from the fetch', error)
            dispatch(getArticlesFail('error'))
        }))
}




