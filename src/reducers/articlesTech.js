export const articlesTech = (state = [], action) => {


    switch (action.type) {
        case 'GET_ARTICLES_TECH':
            console.log('in the reducer TECH', action)
            return action.payload;
        default:
            return state;
    }

}


