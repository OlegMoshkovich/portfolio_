
export function getArticles(topic) {
    console.log('in the get Articles action', topic)
    return {
        type: 'CHANGE_ARTICLES',
        payload: topic
    }
}
