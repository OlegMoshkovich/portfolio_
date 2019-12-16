import React from 'react';
import {
    PageContainer,
    TitleContainer,
    TitleCell,
    FlexContainer,
    CenterContainer,
    ContentContainer,
    Image,
    TextContainer,
    TextCell
} from './styles'


export const Section = (props) => {
    console.log('props', props)
    const { images } = props
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={''} >
                <TitleCell color={'transparent'} textColor={'blue'}>{props.description1}</TitleCell>
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
            <TextContainer color={'white'} >
                <TextCell color={'transparent'}>{props.description2}</TextCell>
            </TextContainer >
        </PageContainer >
    )
}
