import React from 'react';
import {
    PageContainer,
    CenterContainer,
    Image,
    TitleContainer,
    TitleCell
} from './styles'



export const Hero = (props) => {
    return (
        <PageContainer  >
            <TitleContainer color={'white'} >
                {props.header ?
                    <TitleCell fontColor={props.fontColor} color={props.color}>{props.title}</TitleCell> :
                    ''
                }
            </TitleContainer >
            <CenterContainer>
                <Image src={props.img} proportions={props.proportions} />
            </CenterContainer>


        </PageContainer >
    )
}