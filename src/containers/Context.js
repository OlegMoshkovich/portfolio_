
import React, { Component, useState, useEffect } from 'react';

import { Section } from '../components/section/section'
import { Video } from '../components/section/video'
import { Hero } from '../components/hero/hero'
import { NavContext } from '../components/nav/NavContext'
import { PageNav } from '../components/nav/pageNav'
import { SocialNav } from '../components/nav/socialNav'
import title from '../img/title.png'
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


const Context = () => {
    const key = 'mnnfCWd6y4tQ4IipGbUkIZXICpFqbHH1'
    const [state, setState] = useState('hello')
    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=trump&api-key=${key}`)
            .then(resp => resp.json())
            .then(data => data.response)
            .then(data => data.docs)
            .then(docs => setArticles(docs))
    }, [])
    if (articles.length !== 0) {
        console.log('articles are received', articles[5].snippet)
        return (
            <div>
                <NavContext />
                <SocialNav />
                <a href='/' style={{ position: 'fixed', bottom: '30px', right: '45px', color: 'white' }}>portfolio</a>
                <PageContainer  >
                    <div style={{
                        width: '60%',
                        height: '50%',
                        color: 'blue',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                        alignItems: 'center',
                        fontWeight: 'bold'
                    }}>{articles[5].snippet}</div>
                </PageContainer >
                <div></div>
            </div >
        )
    }
    return (
        <div>
            <NavContext />
            <SocialNav />
            <a href='/' style={{ position: 'fixed', bottom: '30px', right: '45px', color: 'white' }}>portfolio</a>
            <PageContainer  >
                <div style={{
                    width: '60%',
                    height: '60%',
                    color: 'blue',
                    backgroundColor: 'white',
                    border: '1px solid white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>articles go here</div>
            </PageContainer >
            <div></div>
        </div >
    )
}


export default Context;
