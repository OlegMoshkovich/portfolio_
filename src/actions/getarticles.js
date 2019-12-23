export function getArticlesPolitics(articles) {
    console.log('in the get articles', articles)
    return { type: 'GET_ARTICLES_POLITICS', payload: articles }
}
export function getArticlesArt(articles) {
    // console.log('in the get articles', articles)
    return { type: 'GET_ARTICLES_ART', payload: articles }
}
export function getArticlesTech(articles) {
    // console.log('in the get articles', articles)
    return { type: 'GET_ARTICLES_TECH', payload: articles }
}
export function getArticlesFail(error) {
    // console.log('in the get articles', articles)
    return { type: 'GET_ARTICLES_FAIL', payload: error }
}

export const fetchArticles = (searchTerm) => dispatch => {
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=LhjEBx8TxE98grgsu312D8vRwatwxrWo`)
        .then(resp => resp.json())
        .then(data => data.response)
        .then(data => data.docs)
        .then(data => {
            if (searchTerm === 'politics') {
                // console.log('in the politics')
                dispatch(getArticlesPolitics(data))
            }
            if (searchTerm === 'technology') {
                // console.log('in the technology')
                dispatch(getArticlesTech(data))
            }
            if (searchTerm === 'art') {
                // console.log('in the technology')
                dispatch(getArticlesArt(data))
            }

        }).catch((function (error) {
            // console.log('in the catch')
            dispatch(getArticlesFail())
        }))
}




