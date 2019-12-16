import React from 'react';
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
// background:yellow;
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
background:${(props) => props.color};
color:white;
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 24px;
padding:2px 10px 2px 10px;
`