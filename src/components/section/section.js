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
                <TitleCell color={'transparent'} textColor={'blue'}>In 2015 I joined an exciting startup with the mission to increase daily safety
                on industrial worksites through application of data</TitleCell>
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
                <TextCell color={'transparent'}>
                    In the course of two years working for Human Condition Safety.
    I developed JS(React) analytical dashboards to visualize data obtained during product pilots and a simmulation engine created using Unity3D.
                </TextCell>
            </TextContainer >
        </PageContainer >
    )
}
