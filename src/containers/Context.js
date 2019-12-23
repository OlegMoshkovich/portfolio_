
import React, { useState, useEffect } from 'react';
import NavContext from '../components/nav_/navcontext_'
import ThemeContext from '../utils/ThemeContext';
import { ContentCard } from '../components/section/contentcard_'
import { ExtraLink } from './styles'
import { SocialNav } from '../components/nav_/socialnav'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/getarticles'

const Context = (props) => {
    //reference to the
    const themeHook = useState({})
    const [article, setArticle] = useState('empty')
    const [random, setRandom] = useState(1)
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        props.fetchArticles('politics')
        props.fetchArticles('art')
        props.fetchArticles('technology')
        console.log('length of the articles length', props.articlesPolitics.length)
        console.log('articles props in the use Effect', props.articlesPolitics)
    }, []);

    if (props.articlesPolitics.length !== 0 && loading) {
        console.log('in the loading loop')
        setLoading(false)
    }


    // // move the fetch to Redux - use thunk for the async actions
    // const fetchArticles = (searchTerm) => {
    //     let topic = 'New York Times ' + searchTerm.toUpperCase() + ' snippet'
    //     setLoading(true)
    //     setSubject(topic)
    //     let genRandom = Math.floor(Math.random() * 10)
    //     genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1)

    //     fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=LhjEBx8TxE98grgsu312D8vRwatwxrWo`)
    //         .then(resp => resp.json())
    //         .then(data => data.response)
    //         .then(data => data.docs)
    //         .then(docs => {
    //             return (
    //                 setLoading(false),
    //                 setArticle(docs[random].snippet))
    //         })
    //         .catch((function (error) {
    //             //set loading to false in order to breal out of the loader and message the user
    //             setLoading(false)
    //             //write a check state to evaluate the errror - so far most of the errors are coming from the 
    //             //api limits -- therefore message to the user to wait until the next request
    //             setArticle('limit is reached - please wait a bit...')
    //         }))
    // }
    console.log('props state from the context', props.articlesPolitics)
    const displayArticle = (subject = '') => {
        // let topic = 'New York Times ' + searchTerm.toUpperCase() + ' snippet'

    }
    return (

        <div>
            {/* Theme Context -- every component inside of the ThemeContext has access to the themeHook 
            -- the themes are set in the NavContext -- and consumed by the SocialNav and the ContentCard  */}
            <ThemeContext.Provider value={themeHook} >
                <NavContext fetchArticles={fetchArticles} />
                <SocialNav />
                <ExtraLink href='/'>portfolio</ExtraLink>
                <ContentCard article={article} subject={subject} loading={loading} />
            </ThemeContext.Provider>
        </div>
    )
}

//return object literal expression availble as props to the compoenent
const mapStateToProps = ({ articlesPolitics }) => ({ articlesPolitics })
const mapDispatchtoProps = dispatch => ({
    fetchArticles: search => dispatch(fetchArticles(search))
})

export default connect(mapStateToProps, mapDispatchtoProps)(Context)

