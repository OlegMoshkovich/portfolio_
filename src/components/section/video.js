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
import video from '../../img/HCS.mp4'


export const Video = (props) => {
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={''} >
                <TitleCell color={'transparent'} textColor={'blue'}>{props.description1}</TitleCell>
            </TitleContainer >
            <FlexContainer color={props.color} >
                <CenterContainer>
                    <video style={{ width: props.proportions, height: props.proportions }} mute loop autoPlay>
                        <source src={props.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                </CenterContainer>
            </FlexContainer>
            <TextContainer color={'white'} >
                <TextCell color={'transparent'}>{props.description2}</TextCell>
            </TextContainer >

        </PageContainer >
    )
}

