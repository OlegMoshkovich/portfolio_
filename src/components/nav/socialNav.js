import React from 'react';
import styled from 'styled-components'

const Circle = styled.div`
width:18px;
height:18px;
// padding: 5px 1px 5px 1px;
background-color:blue;
color:blue;
font-family: 'Roboto', sans-serif;
font-size:10px;
display:flex;
justify-content:center;
border:1px solid white;
align-items:center;
border-radius:50%;
margin: 3px 0px 3px 0px;

`
const NavContainer = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:column;
justify-content:center;
position: fixed;
bottom:20px;
left:30px;
`

export const SocialNav = () => {
    return (
        <NavContainer>
            {
                [...Array(3)].map((el, i) => <Circle>{i + 1}</Circle>)
            }
        </NavContainer>
    )

}