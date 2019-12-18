
import React from 'react';
import styled from 'styled-components'


const Circle = styled.div`
width:${(props) => props.proportions};
height:${(props) => props.proportions};
margin: 0px ${(props) => props.margin || '3px'} 0px ${(props) => props.margin || '3px'};
background-color:${(props) => props.background || 'blue'};
border: 1px solid white;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
border-radius:50%;
display:flex;
font-weight: bold;
justify-content:center;
align-items: center;
color:white;
cursor:pointer;
&:hover {
    background-color:${(props) => props.hover};;
    border:1px solid white
  }

`

const ButtonContainer = styled.div`
width:100%;
// height:auto;
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
position: fixed;
top:80px;
// right:200px;
// border:1px solid red;
`

export const NavContext = (props) => {
    console.log('props', props)
    return (
        <div >
            <ButtonContainer>
                <Circle onClick={() => props.fetchArticles('politics')} background={props.color} proportions={'40px'} hover={'black'} margin={'6px'}>1</Circle>
                <Circle onClick={() => props.fetchArticles('art')} background={props.color} proportions={'40px'} hover={'#FFC696'} margin={'6px'}>2</Circle>
                <Circle onClick={() => props.fetchArticles('technology')} background={props.color} proportions={'40px'} hover={'#00ff00'} margin={'6px'}>3</Circle>
            </ButtonContainer>
        </div >
    )

}