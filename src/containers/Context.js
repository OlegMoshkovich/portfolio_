
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
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const { fetchArticles } = props
        //choosing to fetch all of the articles upon page load and store it in the state container
        fetchArticles('politics')
        fetchArticles('art')
        fetchArticles('technology')
    }, []);

    //function passed to the nav container and triggered by the user
    const displayArticle = (search) => {
        console.log('printing fullstate', search)
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
const mapStateToProps = ({ articlesPolitics, articlesArt, articlesTech }) => ({ articlesPolitics, articlesArt, articlesTech })
const mapDispatchtoProps = dispatch => ({
    fetchArticles: search => dispatch(fetchArticles(search))
})
export default connect(mapStateToProps, mapDispatchtoProps)(Context)

