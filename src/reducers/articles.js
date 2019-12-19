
//set defualt state to the empty array...action is the object that we get from the action dispatch
//completely testable it is idempetend
export default function location(state = [], action) {
    if (action.type === 'CHANGE_ARTICLES') {
        return action.payload
    } else {
        //state is always need to returned -- since it is assumed that something is returned
        return state
    }
}