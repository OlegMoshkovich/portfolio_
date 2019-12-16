import React from 'react';
import styled from 'styled-components'

const Circle = styled.div`
width:18px;
height:18px;
margin: 0px 3px 0px 3px;
background-color:blue;
border-radius:50%;
`
const AnchorCircle = styled.div`
width:18px;
height:18px;
margin: 0px 3px 0px 3px;
background-color:blue;
border-radius:50%;
`
const NavContainer = styled.div`
width:auto;
height:auto;
display:flex;
flex-direction:row;
justify-content:flex-end;
position: fixed;
top:55px;
right:55px;
// border:1px solid blue;
`

export const Nav = () => {
    return (
        <NavContainer>
            <Circle onClick={() => console.log('first circle is clicked')} />
            <Circle />
            <Circle />
            <Circle />
            <Circle />
        </NavContainer>
    )

}