
import React, { useContext } from 'react';
import styled from 'styled-components'
import ThemeContext, { ThemeArt, ThemePolitics, ThemeTechnology } from '../../utils/ThemeContext';
import { connect } from 'react-redux'
import { fetchArticles } from '../../actions/getarticles'


const Circle = styled.div`
width:${(props) => props.proportions};
height:${(props) => props.proportions};
margin: 0px ${(props) => props.margin || '3px'} 0px ${(props) => props.margin || '3px'};
background-color:${(props) => props.background || 'blue'};
border: 1px solid white;
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
border-radius:50%;
display:flex;
font-weight: bold;
justify-content:center;
align-items: center;
font-size:8px;
color:white;
cursor:pointer;
&:hover {
    background-color:${(props) => props.hover};;
    border:1px solid white
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  }
  @media (max-width: 768px) {
    display:${(props) => props.display}
    &:hover {
        border:1px solid white
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
      }
    }
`

const ButtonContainer = styled.div`
width:100%;
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
position: fixed;
top:80px;
`

const NavContext = (props) => {
    const [theme, setTheme] = useContext(ThemeContext)
    // console.log('props from nav', props)
    // props.getArticles('somthing else')
    return (
        <div >
            <ButtonContainer>
                <Circle onClick={() => {
                    return (
                        setTheme(ThemeArt),
                        // props.getArticles('art'),
                        props.displayArticle('art')
                    )
                }} background={theme.pageBackground} proportions={'40px'} hover={'#FFC696'} margin={'6px'}>art</Circle>
                <Circle onClick={() => {
                    return (
                        setTheme(ThemePolitics)
                        // props.getArticles('politics')
                        // props.fetchArticles('politics')
                    )
                }} background={theme.pageBackground} proportions={'40px'} hover={'black'} margin={'6px'}>politics</Circle>
                <Circle onClick={() => {
                    return (
                        setTheme(ThemeTechnology)
                        // props.getArticles('technology')
                        // props.fetchArticles('technology')
                    )
                }} background={theme.pageBackground} proportions={'40px'} hover={'yellow'} margin={'6px'}>tech</Circle>
            </ButtonContainer>
        </div >
    )
}

const mapDispatchtoProps = dispatch => ({ getArticles: search => dispatch(fetchArticles(search)) })
const mapStatetoProps = (state) => ({ state })

export default connect(mapStatetoProps, mapDispatchtoProps)(NavContext)

// export default NavContext
