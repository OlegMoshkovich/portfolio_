import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
display:flex
flex-direction:column;
justify-content:space-around;
align-items:center;
height:100vh;
width:100vw;
background:${(props) => props.color};
// border:10px solid yellow;
// text-align:center;
`
const TitleContainer = styled.div`
width:20vw;
align-self:start;
margin-top: -100px;
margin-left: 50px;
`
const TitleCell = styled.div`
display:flex
flex-direction:row;
justify-content:flex-start;
align-items:left;
background:${(props) => props.color};
color:white;
`
const FlexContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
background:${(props) => props.color};
// border:10px solid red;
`
const CenterContainer = styled.div`
display:flex
flex-direction:row;
justify-content:space-around;
align-items:center;
height:100%;
width:80%;
margin-top: -100px;

// border:1px solid green;

`
const ContentContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
background:${(props) => props.color};
// border:1px solid yellow;
`

const Image = styled.img`
max-width:70%;
max-height:70%;
border:1px solid blue;
`

export const Section = (props) => {
    console.log('props', props)
    const { images } = props
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={'white'} >
                <TitleCell color={'blue'}>HCS</TitleCell>
            </TitleContainer >
            <FlexContainer color={props.color} >
                <CenterContainer>
                    {
                        images.map(image => {
                            return (
                                <ContentContainer color={'white'} >
                                    <Image src={image} />
                                </ContentContainer >
                            )
                        })
                    }
                </CenterContainer>
            </FlexContainer>
        </PageContainer >
    )
}