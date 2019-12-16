import React from 'react';
import styled from 'styled-components'

const Circle = styled.div`
width:${(props) => props.proportions};
height:${(props) => props.proportions};
margin: 0px 3px 0px 3px;
background-color:blue;
border-radius:50%;
display:flex;
font-weight: bold;
justify-content:center;
align-items: center;
color:white;
&:hover {
    background-color:${(props) => props.hover};;
  }

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
align-items: center;
position: fixed;
top:40px;
right:45px;
// border:1px solid blue;
`

export const Nav = () => {
    return (
        <NavContainer>
            <Circle onClick={() => console.log('first circle is clicked')} proportions={'18px'} />
            <Circle proportions={'18px'} hover={'yellow'} />
            <Circle proportions={'18px'} hover={'yellow'} />
            <Circle proportions={'18px'} hover={'yellow'} />
            {/* <Circle proportions={'18px'} hover={'yellow'} /> */}
            <div style={{ margin: '0px 0px 0px 10px' }}>
                <Circle proportions={'40px'} hover={'blue'}>
                    <div style={{ display: 'flex' }}>
                        <div
                            style={{
                                margin: '0px 3px 7px 0px',
                                // transition: "opacity 1s ease- out",
                                // opacity: '0',
                                // height: '0',
                                // overflow: "hidden"
                            }}>_</div>
                        <div>></div>
                    </div>
                </Circle>
            </div>
        </NavContainer >
    )

}