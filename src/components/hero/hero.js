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
        <PageContainer display={props.display} >
            <TitleContainer color={'white'} >
                {props.header ?
                    <TitleCell fontColor={props.fontColor} color={props.color}>{props.title}</TitleCell> :
                    ''
                }
            </TitleContainer >
            <CenterContainer>
                {props.text ? <div style={{ fontFamily: 'roboto', fontSize: '40px', color: 'blue', margin: '0px 0px 150px 0px' }}>Portfolio</div> : <Image src={props.img} proportions={props.proportions} />
                }
            </CenterContainer>


        </PageContainer >
    )
}