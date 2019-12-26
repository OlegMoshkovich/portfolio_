
import React, { useState, useEffect } from 'react';
import NavContext from '../components/nav_/navcontext_'
import ThemeContext from '../utils/ThemeContext';
import { ContentCard } from '../components/section/contentcard_'
import { ExtraLink } from './styles'
import { SocialNav } from '../components/nav_/socialnav'
import { connect } from 'react-redux'
import { fetchArticles, getArticlesFail } from '../actions/getarticles'

const Context = (props) => {

    //reference theme hook
    const themeHook = useState({})
    const [article, setArticle] = useState('empty')
    const [random, setRandom] = useState(1)
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(10)

    useEffect(() => {
        //choosing to fetch all of the articles upon page load and store it in the state container
        fetchAll()
    }, []);

    //wrapper function to dispatch all three fetch actions
    const fetchAll = () => {
        const { fetchArticles } = props
        setLoading(true)
        fetchArticles('politics')
        fetchArticles('art')
        fetchArticles('technology')
    }

    //function passed to the nav container and triggered on the topic button click
    const displayArticle = (search) => {

        //check - disable article display- if the user presses the button before the articles are loaded 
        if (loading
            && props.articlesPolitics.length === 0
            && props.articlesArt.length === 0
            && props.articlesTech.length === 0) {
            return
        }

        const { articlesPolitics, articlesTech, articlesArt } = props
        let genRandom = Math.floor(Math.random() * 10)

        //in case the random generator duplicates the value add or subtract one from the generated value
        genRandom < 10 ?
            genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1) :
            genRandom !== random ? setRandom(genRandom) : setRandom(genRandom - 1)

        //access the appropriate piece of state based on the topic selected by the user
        switch (search) {
            case 'politics':
                setArticle(articlesPolitics[random].snippet)
                break;
            case 'tech':
                setArticle(articlesTech[random].snippet)
                break;
            case 'art':
                setArticle(articlesArt[random].snippet)
                break;
        }
    }

    //count down function displays to the use the message and count until the page reloads
    const countDown = (seconds) => {
        if (seconds > 0) {
            setCount(seconds)
            setArticle(`we are sorry, technical problem encountered the page will reload in ${seconds}`)
            // recursively call the functin to display conut down
            return setTimeout(() => countDown(seconds - 1), 1000)
        } else {
            return
        }
    }


    //Turn off only when all of the articles are fetched
    if (loading
        && props.articlesPolitics.length !== 0
        && props.articlesArt.length !== 0
        && props.articlesTech.length !== 0) {
        setLoading(false)
    }

    //In case the limit is hit -- and the fetch catches the error -- apply this logic -- wait for 10 seconds and try
    // to call api again -- this is an edge case since the api is going to be accessed only once upon the load
    if (loading && props.articlesFail !== '') {
        const { clearFailMessage } = props
        setLoading(false)
        //message the user
        countDown(20)
        setTimeout(
            () => {
                return (
                    clearFailMessage(),
                    fetchAll(),
                    // setLoading(false),
                    setArticle('please select a topic')
                )
            }, 20000
        )
    }

    return (
        <div>
            {/* Theme Context -- every component inside of the ThemeContext has access to the themeHook 
            -- the themes are set in the NavContext -- and consumed by the SocialNav and the ContentCard  */}
            <ThemeContext.Provider value={themeHook} >
                <NavContext displayArticle={displayArticle} />
                <SocialNav />
                <ExtraLink href='/'>portfolio</ExtraLink>
                <ContentCard article={article} subject={subject} loading={loading} />
            </ThemeContext.Provider>
        </div>
    )
}

//destructure pieces of state from the container and attach it to the props
const mapStateToProps = ({
    articlesPolitics,
    articlesArt,
    articlesTech,
    articlesFail }) => ({
        articlesPolitics,
        articlesArt,
        articlesTech,
        articlesFail
    })
const mapDispatchtoProps = dispatch => ({
    fetchArticles: search => dispatch(fetchArticles(search)),
    clearFailMessage: () => dispatch(getArticlesFail(''))
})
export default connect(mapStateToProps, mapDispatchtoProps)(Context)

