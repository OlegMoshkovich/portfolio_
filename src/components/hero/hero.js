import React from 'react';
import {
    PageContainer,
    CenterContainer,
    Image,
    TitleContainer,
    TitleCell
} from './styles'



export const Hero = (props) => {
    console.log(props)
    return (
        <PageContainer color={props.color} >
            <TitleContainer color={'white'} >
                {props.header ?
                    <TitleCell color={'blue'}>{props.title}</TitleCell> :
                    ''
                }

            </TitleContainer >
            <CenterContainer>
                <Image src={props.img} proportions={props.proportions} />
            </CenterContainer>
            <TitleContainer color={'white'} >
                <TitleCell color={'transparent'}>{props.title}</TitleCell>
            </TitleContainer >

        </PageContainer >
    )
}