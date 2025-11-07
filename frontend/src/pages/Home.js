import React from 'react';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import PictureSection from '../components/PictureSection';
import MainItem from '../components/MainItem';
import PictureCollection from '../components/PictureCollection';

const Home = () => {
  return (
    <div id="container1">
      <Banner />
      <AboutSection />
      <PictureSection />
      <div id="banner_bottom">
        <h1 className="text_title_bottom">Pink Light Shadow</h1>
      </div>
      <MainItem />
      <PictureCollection />
      <div id="sponsor">mmm</div>
      <div className="product_detail">mmm</div>
      <div className="Introduction">mmm</div>
    </div>
  );
};

export default Home;