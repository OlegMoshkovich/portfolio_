import React from 'react';
import styled from 'styled-components'

const Circle = styled.div`
width:14px;
height:18px;
padding: 5px 1px 5px 1px;
background-color:white;
color:blue;
font-family: 'Roboto', sans-serif;
font-size:10px;
// text-align:center;
display:flex;
justify-content:center;
border:1px solid white;
align-items:center;
&:hover {
    border:1px solid blue;
  }
`
const NavContainer = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
position: fixed;
top:30%;
right:55px;
`

export const PageNav = () => {
    return (
        <NavContainer>
            {
                [...Array(10)].map((el, i) => <Circle>{i + 1}</Circle>)
            }
        </NavContainer>
    )

}