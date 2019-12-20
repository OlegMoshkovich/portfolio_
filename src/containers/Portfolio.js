import React, { Component } from 'react';
import { Element } from 'react-scroll'

import { Section } from '../components/section/section'
import { Video } from '../components/section/video'
import { Hero } from '../components/hero/hero'
import { Nav } from '../components/nav_/nav_'
import { PageNav } from '../components/nav_/pagenav_'
import { SocialNav } from '../components/nav_/socialnav'

import title from '../img/title.png'

import gs5_hero from '../img/gs/gs2.png'
import map from '../img/gs/map.png'
import ava from '../img/gs/image_gif.gif'
import world from '../img/gs/WORLD.png'
import prototype1 from '../img/gs/prototype1.png'
import prototype2 from '../img/gs/prototype2.png'
import gs_video from '../img/gs_short_demo.mp4'

import hcs_hero from '../img/hcs_dashboard_1.png'
import hcs1 from '../img/hcs/image1.png'
import hcs2 from '../img/hcs/image2.png'
import hcs3 from '../img/hcs/image3.png'
import hcs_video from '../img/HCS.mp4'

import emilie_hero from '../img/emilie-01.png'
import emilie1 from '../img/emilie/emilie1.png'
import emilie2 from '../img/emilie/emilie2.png'
import emilie3 from '../img/emilie/emilie3.png'

import ribbon_hero from '../img/ribbon_dwg.png'
import ribbon1 from '../img/ribbon1.png'
import ribbon2 from '../img/ribbon2.png'
import ribbon3 from '../img/ribbon3.png'
import ribbon_realized from '../img/ribbon_realized.png'

class Portfolio extends Component {
  // myRef = React.createRef();
  render() {
    return (
      <div >
        <Nav />
        <PageNav />
        <SocialNav />
        <a href='/context' style={{ position: 'fixed', bottom: '30px', right: '45px', color: 'blue' }}>context</a>

        <Hero color={'blue'} display={'none'} fontColor={'white'} header={true} title={'Oleg Moshkovich / Engineer'} text={true} img={title} proportions={'93%'} />
        {/* -----------------gs */}
        <Element name="gs" />
        <Element name="1" />
        <Hero className='violet' color={'blue'} fontColor={'white'} header={true} title={'Girls Scouts / React Native '} img={gs5_hero} proportions={'100%'} />

        <Element name="2" />
        <Video src={gs_video} proportions={'80%'}
          description1={'In 2017 I joined omission.studio, то develop a fully functioning prototype of the Girls Scouts mobile application designed for 1.2 million users. The prototype was built using React Native Library and EXPO toolchain.'}
        />
        <Element name="3" />
        <Hero color={'white'} display={'none'} fontColor={'blue'} weight={'light'} header={true} title={'Product Map'} img={map} proportions={'80%'} />

        <Element name="4" />
        <Section color={'white'} border={'transparent'} images={[world, ava]}
          description1={'The designed and prototyped system contained developed concept character, created using Maya and a digital outdoor/world create using Unity. Both concepts were integrated into React Native application in the form of custom media components.  '}
        />
        <Element name="5" />
        <Section color={'white'} border={'transparent'} images={[prototype1, prototype2]}
          description1={' Extensive user research and testing took place in New York and Washington DC, gathered feedback resulted in the definition of the first release feature set.The production team was engaged in September of 2018.'} />

        {/* -----------------emilie */}

        <Element name="emilie" />
        <Element name="6" />
        <Hero color={'blue'} fontColor={'white'} header={true} title={'BCG.DV / ReactJs + Redux + Material'} img={emilie_hero} proportion={'50%'} proportions={'85%'} />
        <Element name="7" />
        <Section color={'white'} images={[emilie1, emilie2, emilie3]}
          description1={'In 2019 I joined Boston Consultant Group to work on Emilie Scientific platform as a front end engineer. The content and user management platform included user assesment single page application, and 2 admin portals used for content and user management.'} />
        {/* -----------------hcs */}

        <Element name="hcs" />
        <Element name="8" />
        <Hero color={'blue'} fontColor={'white'} header={true} title={'HCS / ReactJS and Unity development'} img={hcs_hero} proportions={'100%'} />
        <Element name="9" />
        <Section color={'white'} images={[hcs1, hcs2, hcs3]}
          description1={'In 2015 I joined mission driven start up Human Condition Safety to work on products designed to increase safety on construction sites through the application of IoT systems and simmulation technology.'}
        />
        <Element name="10" />
        <Video src={hcs_video} proportions={'60%'}
          description1={'During my time in HCS I developed JS(React) analytical dashboards to visualize data obtained during product pilots and worked on a simmulation engine created using Unity3D.'}
        />
        {/* -----------------ribbon */}
        <Element name="10design" />
        <Element name="11" />
        <Hero color={'blue'} fontColor={'white'} header={true} title={'10 Design / CATIA Computational design'} img={ribbon_hero} proportions={'120%'} />
        <Element name="11" />
        <Section color={'white'} images={[ribbon1, ribbon2, ribbon3]}
          description1={'In 2012 I participated in designing a cultural portion of chinese city - Zhuhai. I was asked to move to Hong Kong for 6 month and consult the design team during development phase of the project. As a computational designer I created parametric models contolled by a comprehensive set of data points. '} />
        <Element name="12" />
        <Section color={'white'} images={[ribbon_realized]} border={'transparent'}
          description1={' The objective was to find the optimal form for the bespoke geometrical object on the scale of architecture. The workflow involved using object oriented programing to construct the geometrical system to produced the final form of the structure. The designed object was realized in 2017.'} />

      </div >
    );
  }
}


export default Portfolio;
