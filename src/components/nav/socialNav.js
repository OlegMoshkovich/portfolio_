import React from 'react';
import styled from 'styled-components';
import linkedIn from '../../img/in.png';
import git from '../../img/git.png';
import gitLab from '../../img/gitlab.png';

export const SocialNav = (props) => {
    return (
        <NavContainer>
            <Circle href='https://www.gitlab.com/oleg.moshkovich' background={props.color}><Image src={gitLab} proportions={'10px'} /></Circle>
            <Circle href='https://www.linkedin.com/in/olegmoshkovich/' background={props.color}><Image src={linkedIn} proportions={'8px'} /></Circle>
            <Circle href='https://github.com/OlegMoshkovich' background={props.color}><Image src={git} proportions={'8px'} /></Circle>
        </NavContainer>
    )
}

const Circle = styled.a`
width:18px;
height:18px;
background-color:${(props) => props.background || 'blue'};
color:blue;
font-family: 'Roboto', sans-serif;
font-size:10px;
display:flex;
justify-content:center;
border:1px solid white;
align-items:center;
border-radius:50%;
margin: 3px 0px 3px 0px;
cursor:pointer;
&:hover {
    background-color :blue;
  }
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
