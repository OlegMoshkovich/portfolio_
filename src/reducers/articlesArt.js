export const articlesArt = (state = [], action) => {
    switch (action.type) {
        case 'GET_ARTICLES_ART':
            console.log('in the reducer ART', action)
            return action.payload;
        default:
            return state;
    }

}


