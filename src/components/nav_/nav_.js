import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-scroll'

const Circle = styled.div`
width:${(props) => props.proportions};
height:${(props) => props.proportions};
margin: 0px 3px 0px 3px;
background-color:blue;
border: 1px solid white;
border-radius:50%;
display:flex;
font-weight: bold;
justify-content:center;
align-items: center;
color:white;
cursor:${(props) => props.cursor || ' pointer'};
&:hover {
    background-color:${(props) => props.hover};
    border:1px solid ${(props) => props.hoverBorder || 'blue'};
  }
  @media (max-width: 768px) {
    margin: 5px 0px 5px 0px;
    }
`
const CircleLogo = styled.div`
width:${(props) => props.proportions};
height:${(props) => props.proportions};
margin: 0px 3px 0px 3px;
background-color:blue;
border: 1px solid white;
border-radius:50%;
display:flex;
font-weight: bold;
justify-content:center;
align-items: center;
color:white;
cursor:${(props) => props.cursor || ' pointer'};
&:hover {
    background-color:${(props) => props.hover};
    border:1px solid ${(props) => props.hoverBorder || 'blue'};
  }
  @media (max-width: 768px) {
    margin: 5px 0px 5px 0px;
    }
`
const NavContainer = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
position: fixed;
top: 40px;
right: 45px;

@media (max-width: 768px) {
    display:none;
    flex-direction: column-reverse;
    top: 20px;
    right: 20px;
    align-items: center;
    }
`
export const Nav = () => {
    return (
        <NavContainer>
            <Link to="gs" duration={0} >
                <Circle proportions={'18px'} hover={'white'} />
            </Link>
            <Link to="emilie" duration={0} >
                <Circle proportions={'18px'} hover={'white'} />
            </Link>
            <Link to="hcs" duration={0} >
                <Circle proportions={'18px'} hover={'white'} />
            </Link>
            <Link to="10design" duration={0} >
                <Circle proportions={'18px'} hover={'white'} />
            </Link>
            <div style={{ margin: '0px 0px 0px 10px' }}>
                <Circle proportions={'40px'} hover={'blue'} cursor={'default'} hoverBorder={'white'}>
                    <div style={{ display: 'flex' }}>
                        <div
                            style={{
                                margin: '0px 3px 7px 0px',
                            }}>_</div>
                        <div>></div>
                    </div>
                </Circle>
            </div>
        </NavContainer >
    )
}


