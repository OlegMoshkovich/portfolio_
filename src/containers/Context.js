
import React, { useState } from 'react';
import { NavContext } from '../components/nav/NavContext'
import { SocialNav } from '../components/nav/socialNav'
import styled from 'styled-components'

export const PageContainer = styled.div`
    display:flex
    height:100vh;
    width:100vw;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    background:${(props) => props.color || 'blue'};
    //  border:2px solid yellow;
    `
export const CenterContainer = styled.div`
    display:flex
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:100%;
    margin-top:20px;
    
    background:blue;
    // border: 1px solid red;
    `
export const Image = styled.img`
    max-width:${(props) => props.proportions || '80%'};
    max-height:${(props) => props.proportions || '80%'};
    // border: 1px solid blue; 
    `
export const TitleContainer = styled.div`
    width:auto;
    align-self:start;
    margin-top: 50px;
    margin-left: 50px;
    `

export const TitleCell = styled.div`
    display:flex
    flex-direction:row;
    justify-content:flex-start;
    align-items:left;
    background:${(props) => props.color || 'blue'};
    color:${(props) => props.fontColor || 'white'};
    font-family: 'Roboto', sans-serif;
    font-weight: ${(props) => props.weight || 'white'};
    font-size: 24px;
    padding:2px 10px 2px 10px;
    `

export const ContentContainer = styled.div`
    width: 60%;
    height: 50%;
    background-color: white;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    `

const Content = styled.div`
    font-weight: light;
    color: blue;
    margin:20px;
    `
const ExtraLink = styled.a`
    position: fixed; 
    bottom: 30px; 
    right: 45px;
    color: white;
    `


const Context = () => {
    const key = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqbHH1'
    const [article, setArticle] = useState('empty')
    const [random, setRandom] = useState(1)
    console.log(article)
    // useEffect(() => {
    //     fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=${key}`)
    //         .then(resp => resp.json())
    //         .then(data => data.response)
    //         .then(data => data.docs)
    //         .then(docs => setArticles(docs))
    // }, [])

    const fetchArticles = (searchTerm) => {

        console.log('in the fetch')
        let genRandom = Math.floor(Math.random() * 10)
        genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1)

        console.log('random', random)
        console.log('search term', searchTerm)
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${key}`)
            .then(resp => resp.json())
            .then(data => data.response)
            .then(data => data.docs)
            .then(docs => setArticle(docs[random].snippet))
    }
    console.log(article)

    return (


        < div >
            <NavContext fetchArticles={fetchArticles} />
            <SocialNav />
            <ExtraLink href='/' >portfolio</ExtraLink>
            <PageContainer>
                <ContentContainer>
                    {article === 'empty' ? <Content>waiting</Content> : <Content>{article}</Content>}
                </ContentContainer>
            </PageContainer >
            <div></div>
        </div >
    )
}


export default Context;
