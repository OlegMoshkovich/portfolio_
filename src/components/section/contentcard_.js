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
        //  border:2px solid yellow;
        `
const CenterContainer = styled.div`
        display:flex
        flex-direction:row;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:100%;
        margin-top:40px;
        background:blue;
        // border: 1px solid red;
        `
const Image = styled.img`
        max-width:${(props) => props.proportions || '80%'};
        max-height:${(props) => props.proportions || '80%'};
        `
const TitleContainer = styled.div`
        width:auto;
        align-self:start;
        margin-top: 50px;
        margin-left: 50px;
        `
const TitleCell = styled.div`
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
        }
        `
const Content = styled.div`
        font-weight: light;
        color: ${(props) => props.color};
        font-size: 24px;
        font-weight:${(props) => props.weight};
        margin:70px 40px 60px 40px;
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
        useEffect(
                () => setTheme(ThemeDefault), []
        )

        return (
                < PageContainer color={theme.pageBackground} >
                        {
                                props.loading ?
                                        // Pulse external library activated on the loading flag passed from the Context Container
                                        <PulseLoader sizeUnit={"px"} size={10} color={'white'} loading={props.loading} />

                                        //ConteentContainer compoenent accepts the theme directly from the Theme Provider
                                        : <ContentContainer font={theme.font} align={theme.align} background={theme.contentBackground} border={theme.border} radius={theme.radius}>
                                                {
                                                        props.article === 'empty' ?
                                                                <Content color={theme.color}>please select a topic</Content> :
                                                                <Content color={theme.color} weight={theme.fontWeight}
                                                                // style={{ borderBottom: '1px solid #E0E0E0', paddingBottom: '20px' }}
                                                                >
                                                                        {props.article}</Content>
                                                }
                                                <Subject color={theme.color}>{props.subject}</Subject>
                                        </ContentContainer>
                        }
                </PageContainer >
        )
}

