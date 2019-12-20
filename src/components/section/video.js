import React from 'react';
import {
    PageContainer,
    TitleContainer,
    TitleCell,
    CenterContainer,
} from './styles'


export const Video = (props) => {
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={'transparent'} >
                <TitleCell color={'transparent'} textColor={'blue'}>{props.description1}</TitleCell>
            </TitleContainer >
            <CenterContainer>
                <video style={{ width: props.proportions, height: props.proportions }} loop autoPlay>
                    <source src={props.src} type="video/mp4" />
                    video is not supported by the browser
                      </video>
            </CenterContainer>=
        </PageContainer >
    )
}

