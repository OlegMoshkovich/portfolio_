export const articlesTech = (state = [], action) => {
    console.log('in the reducer', action)

    switch (action.type) {
        case 'GET_ARTICLES_TECH':
            return action.payload;
        default:
            return state;
    }

}


