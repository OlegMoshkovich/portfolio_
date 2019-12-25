import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import PulseLoader from 'react-spinners/PulseLoader'
import ThemeContext, { ThemeDefault } from '../../utils/ThemeContext';

const PageContainer = styled.div`
        display:flex
        height:100vh;
        width:100vw;
        flex-direction:column;
        justify-content:space-around;
        align-items:center;
        background:${(props) => props.color};
        `
const ContentContainer = styled.div`
        width: 400px;
        height: auto;
        background-color:${(props) => props.background}  ;
        border: .5px solid ${(props) => props.border || 'white'};
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: ${(props) => props.align || 'center'};
        align-items: center;
        border-radius:${(props) => props.radius};
        font-family: ${(props) => props.font};
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
        @media (max-width: 768px) {
        width: 80%;
        margin: 0px 0px 80px 0px
        }
        `
const Content = styled.div`
        font-weight: light;
        color: ${(props) => props.color};
        font-size: 24px;
        font-weight:${(props) => props.weight};
        margin:70px 40px 60px 40px;
        @media (max-width: 768px) {
                font-size: 18px;
                }
        `
const Subject = styled.div`
        margin-bottom: 20px; 
        margin-right: 10px;
        color: ${(props) => props.color};
        font-size: 12px;
            `

export const ContentCard = (props) => {

        //hook that is referencing ThemeContext
        const [theme, setTheme] = useContext(ThemeContext)

        //default theme is set on at the mounting face of the Context Conatainer
        useEffect(() => setTheme(ThemeDefault), [])
        return (
                < PageContainer color={theme.pageBackground} >
                        {
                                props.loading ?
                                        // Pulse external library activated on the loading flag passed from the ContextContainer
                                        <PulseLoader sizeUnit={"px"} size={10} color={'white'} loading={props.loading} />

                                        //ContextContainer styled component accepts the properties directly from the Theme Provider
                                        : <ContentContainer font={theme.font} align={theme.align} background={theme.contentBackground} border={theme.border} radius={theme.radius}>
                                                {
                                                        props.article === 'empty' ?
                                                                <Content color={theme.color}>please select a topic</Content> :
                                                                <Content color={theme.color} weight={theme.fontWeight}
                                                                >
                                                                        {props.article}</Content>
                                                }
                                                <Subject color={theme.color}>{props.subject}</Subject>
                                        </ContentContainer>
                        }
                </PageContainer >
        )
}

