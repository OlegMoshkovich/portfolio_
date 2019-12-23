export const articlesArt = (state = [], action) => {
    console.log('in the reducer', action)

    switch (action.type) {
        case 'GET_ARTICLES_ART':
            return action.payload;
        default:
            return state;
    }

}


