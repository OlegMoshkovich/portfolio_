export const articlesPolitics = (state = [], action) => {

    switch (action.type) {
        case 'GET_ARTICLES_POLITICS':
            console.log('in the reducer POLITICS', action)
            return action.payload;
        default:
            return state;
    }

}


