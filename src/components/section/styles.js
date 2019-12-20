import styled from 'styled-components';

export const PageContainer = styled.div`
display:flex
flex-direction:column;
justify-content:space-around;
align-items:center;
height:100vh;
width:100vw;
background:${(props) => props.color};
@media (max-width: 768px) {
    display:none;
    }
`
export const TitleContainer = styled.div`
width:auto;
align-self:start;
margin-top: 45px;
margin-left: 50px;
margin-right: 200px;
`
export const TitleCell = styled.div`
display:flex
flex-direction:row;
justify-content:flex-start;
align-items:left;
background:${(props) => props.color};
color:${(props) => props.textColor};
font-family: 'Roboto', sans-serif;
font-weight: light;
font-size: 24px;
padding:2px 10px 2px 10px;
`

export const TextContainer = styled.div`
width:65%;
align-self:start;
margin-top: -100px;
margin-left: 50px;
margin-right: 50px;
`
export const TextCell = styled.div`
display:flex
flex-direction:row;
justify-content:flex-start;
align-items:left;
background:${(props) => props.color};
color:blue;
font-family: 'Roboto', sans-serif;
font-weight: light;
font-size: 24px;
padding:2px 10px 2px 10px;
`

export const FlexContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
background:${(props) => props.color};
`
export const CenterContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
height:100%;
width:80%;
margin-top: -100px;
`
export const ContentContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
background:${(props) => props.color};
`
export const Image = styled.img`
max-width:70%;
max-height:70%;
border:1px solid ${(props) => props.border || 'blue'};
`