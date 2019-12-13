import React from 'react';
import styled from 'styled-components';
import gs1 from '../img/gs/gs1.png'
import gs2 from '../img/gs/gs2.png'
import gs3 from '../img/gs/gs3.png'
import hcs1 from '../img/hcs/image1.png'
import hcs2 from '../img/hcs/image2.png'
import hcs3 from '../img/hcs/image3.png'

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
height:100%;
width:80%;
// background:yellow;
border: 1px solid yellow;
`
const CenterContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
width:40%;
height:40%;
background:${(props) => props.color};
`
const Image = styled.img`
max-width:100%;
max-height:100%;
// border: 1px solid yellow; 
`

export const Hero = (props) => {
    return (
        <PageContainer color={props.color} >
            <ContentContainer>
                <Image src={gs1} />
            </ContentContainer>
        </PageContainer >
    )
}