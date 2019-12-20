import React, { Component } from 'react';
// import { Element } from 'react-scroll'

// import { Section } from './components/section/section'
// import { Video } from './components/section/video'
import { Hero } from './components/hero/hero'
import { Nav } from './components/nav/nav'
import { PageNav } from './components/nav/pagenav'
import { SocialNav } from './components/nav/socialnav'

import title from './img/title.png'

// import gs5_hero from '../img/gs/gs2.png'
// import map from '../img/gs/map.png'
// import ava from '../img/gs/image_gif.gif'
// import world from '../img/gs/WORLD.png'
// import prototype1 from '../img/gs/prototype1.png'
// import prototype2 from '../img/gs/prototype2.png'
// import gs_video from '../img/gs_short_demo.mp4'

// import hcs_hero from '../img/hcs_dashboard_1.png'
// import hcs1 from '../img/hcs/image1.png'
// import hcs2 from '../img/hcs/image2.png'
// import hcs3 from '../img/hcs/image3.png'
// import hcs_video from '../img/HCS.mp4'

// import emilie_hero from '../img/emilie-01.png'
// import emilie1 from '../img/emilie/emilie1.png'
// import emilie2 from '../img/emilie/emilie2.png'
// import emilie3 from '../img/emilie/emilie3.png'

// import ribbon_hero from '../img/ribbon_dwg.png'
// import ribbon1 from '../img/ribbon1.png'
// import ribbon2 from '../img/ribbon2.png'
// import ribbon3 from '../img/ribbon3.png'
// import ribbon_realized from '../img/ribbon_realized.png'


export class Portfolio extends Component {
  // myRef = React.createRef();
  render() {
    return (
      <div >
        <Nav />
        <PageNav />
        <SocialNav />
        {/* <a href='/context' style={{ position: 'fixed', bottom: '30px', right: '45px', color: 'blue' }}>context</a> */}

        <Hero color={'blue'} display={'none'} fontColor={'white'} header={true} title={'Oleg Moshkovich / Engineer'} img={title} proportions={'93%'} />
        {/* -----------------gs */}

      </div >
    );
  }
}



