
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
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)
    const [disable, setDisable] = useState(false)

    //run this useEffect only once when component mount
    useEffect(() => {
        const { fetchArticles } = props
        //choosing to fetch all of the articles upon page load and store it in the state container
        fetchArticles('politics')
        fetchArticles('art')
        fetchArticles('technology')
    }, [reload]);

    // //This useEffect is responsible for the case when the API returns 401 -- and the fetch needs to re run
    // useEffect(() => {
    //     console.log('this effect is suppose to run')
    //     const { fetchArticles } = props
    //     fetchArticles('politics')
    //     fetchArticles('art')
    //     fetchArticles('technology')
    // }, [reload])

    //turn on loading flag as the page mounts -- and turn it off only when all of the articles are fetched
    //not ideal scenario from the user perspective...nor from the logic -- device a better strategy
    if (loading
        && props.articlesPolitics.length !== 0
        && props.articlesArt.length !== 0
        && props.articlesTech.length !== 0) {
        setLoading(false)
    }

    //In case the limit is hit -- and the fetch catches the error -- apply this logic -- wait for 5 seconds and try
    // to call api again
    if (loading && props.articlesFail !== '') {
        setLoading(false)
        //message the user about th
        setArticle(props.articlesFail)
        setTimeout(
            () => {
                return (
                    setArticle('please select a topic'),
                    setReload(!reload),
                    setLoading(false)
                )
            }, 10000
        )
    }

    //function passed to the nav container and triggered by the user
    const displayArticle = (search) => {
        const { articlesPolitics, articlesTech, articlesArt } = props
        let genRandom = Math.floor(Math.random() * 10)
        if (genRandom < 9) {
            genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1)
        }
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

