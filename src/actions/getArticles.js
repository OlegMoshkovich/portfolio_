
export default function getArticles(article) {
    return {
        type: 'CHANGE_ARTICLES',
        payload: article
    }
}