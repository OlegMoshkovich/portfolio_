
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
    background:${(props) => props.color};
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
    height: auto;
    background-color:${(props) => props.background}  ;
    border: .5px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius:0px;
    font-family: ${(props) => props.font};
    `

const Content = styled.div`
    font-weight: light;
    color: white;
    font-size: 24px;
    margin:60px 40px 60px 40px;
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
    const [background, setBackground] = useState('blue')
    const [compColor, setCompColor] = useState('blue')
    const [font, setFont] = useState('roboto')
    const [weight, setWeight] = useState('light')



    const fetchArticles = (searchTerm) => {

        if (searchTerm === 'politics') {
            setBackground('black')
            setFont('Times New Roman')
            setCompColor('black')

        } else if (searchTerm === 'art') {
            setBackground('#BACFC9')
            setFont('Open+Sans')
            setCompColor('#FFC696 ')

        } else if (searchTerm === 'technology') {
            setBackground('lightgrey')
            setFont('Inconsolata')
            setCompColor('#00ff00')
        }

        let genRandom = Math.floor(Math.random() * 10)
        genRandom !== random ? setRandom(genRandom) : setRandom(genRandom + 1)
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${key}`)
            .then(resp => resp.json())
            .then(data => data.response)
            .then(data => data.docs)
            .then(docs => setArticle(docs[random].snippet))
            .catch((function (error) {
                setArticle('please wait a bit...')
            }))
    }
    return (
        < div >
            <NavContext fetchArticles={fetchArticles} color={background} />
            <SocialNav color={background} />
            <ExtraLink href='/' >portfolio</ExtraLink>
            <PageContainer color={background} >
                <ContentContainer font={font} background={compColor}>
                    {article === 'empty' ? <Content>please select a number</Content> : <Content>{article}</Content>}
                </ContentContainer>
            </PageContainer >
            <div></div>
        </div >
    )
}


export default Context;
