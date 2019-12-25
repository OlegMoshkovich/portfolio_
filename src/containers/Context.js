
import React, { useState, useEffect } from 'react';
import NavContext from '../components/nav_/navcontext_'
import ThemeContext from '../utils/ThemeContext';
import { ContentCard } from '../components/section/contentcard_'
import { ExtraLink } from './styles'
import { SocialNav } from '../components/nav_/socialnav'
import { connect } from 'react-redux'
import { fetchArticles } from '../actions/getarticles'

const Context = (props) => {
    //reference theme hook
    const themeHook = useState({})
    const [article, setArticle] = useState('empty')
    const [random, setRandom] = useState(1)
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(10)

    //run this useEffect only once when component mount
    useEffect(() => {
        //choosing to fetch all of the articles upon page load and store it in the state container
        // fetchAll()
        countDown(10)
    }, []);

    //wrapper function to dispatch all three fetch actions
    const fetchAll = () => {
        const { fetchArticles } = props
        fetchArticles('politics')
        fetchArticles('art')
        fetchArticles('technology')
    }

    //function passed to the nav container and triggered on the topic button click
    const displayArticle = (search) => {
        if (!loading
            && props.articlesPolitics.length === 0
            && props.articlesArt.length === 0
            && props.articlesTech.length === 0) {
            setLoading(true)
            return
        }

        const { articlesPolitics, articlesTech, articlesArt } = props
        let genRandom = Math.floor(Math.random() * 10)

        //in case the the random generator duplicates the value
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
    const countDown = (num) => {
        console.log('in the countdown present count is', count)
        if (num > 1) {
            console.log('inside the loop new count', num)
            setCount(num)
            setArticle(`the fetch failed count ${num}`)
            setTimeout(() => countDown(num - 1), 1000)
        } else {
            return
        }

        console.log('in the countdown')
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
        setLoading(false)
        //message the user

        setArticle(`the fetch failed ${count}`)
        countDown(20)

        setTimeout(
            () => {
                return (
                    fetchAll(),
                    setArticle('please select a topic'),
                    setLoading(true)
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
    fetchArticles: search => dispatch(fetchArticles(search))
})
export default connect(mapStateToProps, mapDispatchtoProps)(Context)

