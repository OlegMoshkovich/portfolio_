
import React, { useState } from 'react';
import { NavContext } from '../components/nav/NavContext'
import { SocialNav } from '../components/nav/SocialNav'
import styled from 'styled-components'
import ThemeContext from '../utils/ThemeContext';
import { ContentCard } from '../components/section/contentCard'
import { connect } from 'react-redux'
import { getArticles } from '../actions/getArticles'


const Context = (props) => {
    const themeHook = useState({})
    const key = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqbHH1'
    const [article, setArticle] = useState('empty')
    const [random, setRandom] = useState(1)
    const [subject, setSubject] = useState('')
    const [loading, setLoading] = useState(false)


    const fetchArticles = (searchTerm) => {
        let topic = 'New York Times ' + searchTerm.toUpperCase() + ' snippet'
        setLoading(true)
        setSubject(topic)
        props.getArticles(searchTerm)

        let genRandom = Math.floor(Math.random() * 10)
        genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1)

        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${key}`)
            .then(resp => resp.json())
            .then(data => data.response)
            .then(data => data.docs)
            .then(docs => {
                return (
                    setLoading(false),
                    setArticle(docs[random].snippet))
            })
            .catch((function (error) {
                setArticle('please wait a bit...')
                // setLoading(true)
            }))
    }

    return (
        <div>

            {/* Theme Context -- every component inside of the ThemeContext has access to the themeHook  */}
            <ThemeContext.Provider value={themeHook} >
                <NavContext fetchArticles={fetchArticles} />
                <SocialNav />
                <div>{props.articles}</div>
                <ExtraLink href='/' >portfolio</ExtraLink>
                <ContentCard article={article} subject={subject} loading={loading} />

            </ThemeContext.Provider>
        </div>
    )
}
const mapStateToProps = ({ articles }) => ({ articles })

const mapDispatchToProps = dispatch => ({
    getArticles: topic => dispatch(getArticles(topic))
})

export default connect(mapStateToProps, mapDispatchToProps)(Context);

const ExtraLink = styled.a`
            position: fixed; 
            bottom: 30px; 
            right: 45px;
            color: white;
            `
