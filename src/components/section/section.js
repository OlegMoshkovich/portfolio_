import React from 'react';
import {
    PageContainer,
    TitleContainer,
    TitleCell,
    CenterContainer,
    ContentContainer,
    Image,
} from './styles'


export const Section = (props) => {
    const { images } = props
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={''} >
                <TitleCell color={'transparent'} textColor={'blue'}>{props.description1}</TitleCell>
            </TitleContainer >
            <CenterContainer>
                {
                    images.map((image, index) => {
                        return (
                            <ContentContainer key={index} color={'white'}  >
                                <Image src={image} border={props.border} />
                            </ContentContainer >
                        )
                    })
                }
            </CenterContainer>
        </PageContainer >
    )
}
