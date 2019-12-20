import styled from 'styled-components'

export const PageContainer = styled.div`
display:flex
height:100vh;
width:100vw;
flex-direction:column;
justify-content:space-around;
align-items:center;
background:${(props) => props.color};
@media (max-width: 768px) {
    display:${(props) => props.display}
    }
`
export const CenterContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
width:100%;
height:100%;
margin-top:20px;
@media (max-width: 768px) {
    width:80%;
    }
`
export const Image = styled.img`
max-width:${(props) => props.proportions || '80%'};
max-height:${(props) => props.proportions || '80%'};
`
export const TitleContainer = styled.div`
width:auto;
align-self:start;
margin-top: 50px;
margin-left: 50px;
@media (max-width: 768px) {
    margin-left: 20px;
    margin-top: 0px;
    align-self:left;
    width:auto;
    }
`

export const TitleCell = styled.div`
display:flex
flex-direction:row;
justify-content:flex-start;
align-items:left;
background:${(props) => props.color};
color:${(props) => props.fontColor || 'white'};
font-family: 'Roboto', sans-serif;
font-weight: ${(props) => props.weight || 'white'};
font-size: 24px;
padding:2px 10px 2px 10px;
@media (max-width: 768px) {
    color:white;
    width:100%;
    font-size: 18px;
    margin-left: 0px;
    margin-top: 20px;
    padding:2px 2px 2px 5px;
    align-items:center;
    }
`