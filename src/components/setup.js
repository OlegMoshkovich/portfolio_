import React from 'react';
import styled from 'styled-components';
import gs from '../img/gs/gs1.png'

const PageContainer = styled.div`
display:flex
height:100vh;
width:100vw;
flex-direction:row;
justify-content:space-around;
align-items:center;
background:${(props) => props.color};
`
const ContentContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
height:80%;
width:80%;
// background:yellow;
border: 1px solid yellow;
`
const CenterContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:30%;
height:30%;
background:${(props) => props.color};
`
const Image = styled.img`
max-width:100%;
max-height:100%;
    border: 1px solid yellow; 
`

export const Section = (props) => {
    return (
        <PageContainer color={props.color} >
            <ContentContainer>
                <CenterContainer color={'white'} >
                    <Image src={gs} />
                </CenterContainer >
                <CenterContainer color={'yellow'} />
                <CenterContainer color={'red'} />
            </ContentContainer>

        </PageContainer >
    )
}