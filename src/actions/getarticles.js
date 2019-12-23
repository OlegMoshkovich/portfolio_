import ReduxThunk from 'redux-thunk'


export function getArticlesSuccess(articles) {
    console.log('in the get articles', articles)
    return { type: 'GET_ARTICLES_SUCCESS', payload: articles }
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
            dispatch(getArticlesSuccess(data))
        }).catch((function (error) {
            dispatch(getArticlesSuccess())
        }))
}




