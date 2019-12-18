import React, { Component } from 'react';
import { Nav } from '../components/nav/Nav'
import { SocialNav } from '../components/nav/socialNav'
import styled from 'styled-components'



export const PageContainer = styled.div`
display:flex
height:100vh;
width:100vw;
flex-direction:column;
justify-content:space-around;
align-items:center;
background:${(props) => props.color || 'blue'};
//  border:2px solid yellow;
`
export const CenterContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
width:100%;
height:100%;
margin-top:20px;

background:blue;
// border: 1px solid red;
`
export const Image = styled.img`
max-width:${(props) => props.proportions || '80%'};
max-height:${(props) => props.proportions || '80%'};
// border: 1px solid blue; 
`
export const TitleContainer = styled.div`
width:auto;
align-self:start;
margin-top: 50px;
margin-left: 50px;
`

export const TitleCell = styled.div`
display:flex
flex-direction:row;
justify-content:flex-start;
align-items:left;
background:${(props) => props.color || 'blue'};
color:${(props) => props.fontColor || 'white'};
font-family: 'Roboto', sans-serif;
font-weight: ${(props) => props.weight || 'white'};
font-size: 24px;
padding:2px 10px 2px 10px;
`


class Map extends Component {
    render() {
        return (
            <div>
                <Nav />

                <SocialNav />
                <a href='/' style={{ position: 'fixed', bottom: '30px', right: '45px', color: 'white' }}>portfolio</a>
                <PageContainer  >
                    {/* <TitleContainer  >

                        <TitleCell >Oleg Moshkovich / Engineer</TitleCell>


                    </TitleContainer > */}
                    {/* <CenterContainer>
                        <div>map goes here</div>
                    </CenterContainer> */}

                    <div style={{
                        width: '60%',
                        height: '60%',
                        color: 'blue',
                        backgroundColor: 'white',
                        border: '1px solid white',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>map goes here</div>


                </PageContainer >
                <div></div>
            </div >

        )

    }
}

export default Map;