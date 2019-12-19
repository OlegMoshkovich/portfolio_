import { combinedReducers } from 'redux'
import articles from './articles'

//redux store is a tree of data -- so in this case articles reducer only effect articles parameter
//everytine articles get modified run location reducer
export default combinedReducers({
    articles: articles,
})