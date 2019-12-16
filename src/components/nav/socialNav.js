import React from 'react';
import styled from 'styled-components';
import linkedIn from '../../img/in.png';
import git from '../../img/git.png';
import gitLab from '../../img/gitlab.png';

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

export const Image = styled.img`
width:${(props) => props.proportions};
height:${(props) => props.proportions};
`

export const SocialNav = () => {
    return (
        <NavContainer>

            <Circle><Image src={gitLab} proportions={'10px'} /></Circle>
            <Circle><Image src={linkedIn} proportions={'8px'} /></Circle>
            <Circle><Image src={git} proportions={'8px'} /></Circle>

        </NavContainer>
    )

}