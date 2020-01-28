import React, { Component, useState, useEffect, useContext } from 'react';
import { Element } from 'react-scroll'
import ThemeContext, { ThemeAEC } from '../utils/ThemeContext';
import { Section } from '../components/section/section'
import { Video } from '../components/section/video'
import { Hero } from '../components/hero/hero'
import { Nav } from '../components/nav_/nav_'
import { PageNav } from '../components/nav_/pagenav_'
import { SocialNav } from '../components/nav_/socialnav'

import title from '../img/title.png'

import gc from '../img/building/resume1.png'

import wtc from '../img/building/resume2.png'

import ribbon from '../img/building/resume3.png'

import gprom from '../img/building/resume4.png'

import w from '../img/building/resume5.png'

import overall from '../img/building/resume6.png'

import { pageViewEvent } from '../actions/segment'
import { connect } from 'react-redux'

const PortfolioBuilding = () => {
  // myRef = React.createRef();
  const themeHook = useState({})
  const [theme, setTheme] = useContext(ThemeContext)
  useEffect(() => setTheme(ThemeAEC), [])

  return (

    <ThemeContext.Provider value={themeHook} >
      <Nav background={'black'} />
      <PageNav />
      <SocialNav />
      <a href='/' style={{ position: 'fixed', bottom: '30px', right: '45px', color: 'black' }}>home</a>
      <Hero color={'black'} fontColor={'white'} header={true} title={'Oleg Moshkovich / Engineer'} text={true} img={title} proportions={'93%'} >
        AEC Portfolio
        </Hero>
      {/* -----------------gs */}
      <Element name="gs" />
      <Element name="1" />
      <Hero className='violet' color={'black'} fontColor={'white'} header={true} img={gc} proportions={'95%'} />
      {/* -----------------emilie */}
      <Element name="emilie" />
      <Element name="2" />
      <Hero color={'black'} fontColor={'white'} header={true} img={wtc} proportions={'95%'} />

      {/* -----------------hcs */}
      <Element name="hcs" />
      <Element name="3" />
      <Hero color={'black'} fontColor={'white'} header={true} img={ribbon} proportions={'95%'} />

      {/* -----------------ribbon */}
      <Element name="10design" />
      <Element name="4" />
      <Hero color={'black'} fontColor={'white'} header={true} img={gprom} proportions={'95%'} />

      {/* -----------------ribbon */}
      <Element name="10design" />
      <Element name="5" />
      <Hero color={'black'} fontColor={'white'} header={true} img={w} proportions={'95%'} />

      {/* -----------------ribbon */}
      <Element name="10design" />
      <Element name="6" />
      <Hero color={'black'} fontColor={'white'} header={true} img={overall} proportions={'95%'} />


    </ThemeContext.Provider>
  );
}


const MapDispatchToProps = dispatch => ({
  pageEvent: () => dispatch(pageViewEvent('Main', '/index'))
})

export default connect(null, MapDispatchToProps)(PortfolioBuilding);
