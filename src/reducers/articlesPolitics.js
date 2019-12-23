export const articlesPolitics = (state = [], action) => {
    console.log('in the reducer', action)

    switch (action.type) {
        case 'GET_ARTICLES_POLITICS':
            return action.payload;
        default:
            return state;
    }

}


