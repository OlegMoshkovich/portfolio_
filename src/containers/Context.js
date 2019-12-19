
import React, { useState, useContext } from 'react';
import { NavContext } from '../components/nav/NavContext'
import { SocialNav } from '../components/nav/SocialNav'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'
import ThemeContext, { ThemeDefault } from '../utils/ThemeContext';
import { News } from '../components/section/news'



const Context = () => {
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
                <ExtraLink href='/' >portfolio</ExtraLink>
                <News article={article} subject={subject} loading={loading} />
            </ThemeContext.Provider>
        </div>
    )
}


const ExtraLink = styled.a`
    position: fixed; 
    bottom: 30px; 
    right: 45px;
    color: white;
    `


export default Context;
