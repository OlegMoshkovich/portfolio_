import React from 'react';
import {
    PageContainer,
    TitleContainer,
    TitleCell,
    FlexContainer,
    CenterContainer,
    TextContainer,
    TextCell
} from './styles'


export const Video = (props) => {
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={'transparent'} >
                <TitleCell color={'transparent'} textColor={'blue'}>{props.description1}</TitleCell>
            </TitleContainer >
            {/* <FlexContainer color={props.color} > */}
            <CenterContainer>
                <video style={{ width: props.proportions, height: props.proportions }} loop autoPlay>
                    <source src={props.src} type="video/mp4" />
                    Your browser does not support the video tag.
                      </video>
            </CenterContainer>
            {/* </FlexContainer> */}
            {/* <TextContainer color={'white'} >
                <TextCell color={'transparent'}>{props.description2}</TextCell>
            </TextContainer > */}

        </PageContainer >
    )
}

