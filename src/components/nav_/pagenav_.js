import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-scroll'

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
cursor:pointer;
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
top:25%;
right:55px;
@media (max-width: 768px) {
    display:none;
    }
`

export const PageNav = () => {
    return (
        <NavContainer>
            {
                [...Array(12)].map((el, i) => <Link key={i} to={String(i + 1)} duration={0} offset={0} ><Circle>{i + 1}</Circle></Link>)
            }
        </NavContainer>
    )

}