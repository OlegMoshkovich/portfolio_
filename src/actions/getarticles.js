export function getArticles(articles) {
    // console.log('in the get articles', articles)
    return { type: 'GET_ARTICLES', payload: articles }
}

