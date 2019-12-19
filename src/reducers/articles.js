//set defualt state to the empty array...action is the object that we get from the action dispatch
//completely testable it is idempetend

export const articles = (state = [], action) => {
    if (action.type === 'CHANGE_ARTICLES') {
        console.log('in the reducer', action.payload)
        return action.payload
    } else {
        //state is always need to returned -- since it is assumed that something is returned
        return state
    }
}