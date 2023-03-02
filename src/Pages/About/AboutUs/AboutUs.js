import React from 'react';
import Reviews from '../../Reviews/Reviews';
import AboutBanner from '../AboutBanner/AboutBanner';
import Dentist from '../Dentist/Dentist';
import HaveDone from '../HaveDone/HaveDone';
import WhyWeBest from '../WhyWeBest/WhyWeBest';

const AboutUs = () => {
    return (
        <div className='lg:mt-8'>
            <AboutBanner></AboutBanner>
            <HaveDone></HaveDone>
            <WhyWeBest></WhyWeBest>
            <Dentist></Dentist>
            <Reviews></Reviews>
        </div>
    );
};

export default AboutUs;