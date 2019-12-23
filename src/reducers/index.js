import { combineReducers } from 'redux'
import { articlesPolitics } from './articlesPolitics'
import { articlesArt } from './articlesArt'
import { articlesTech } from './articlesTech'

export default combineReducers({
    articlesPolitics,
    articlesArt,
    articlesTech
})

