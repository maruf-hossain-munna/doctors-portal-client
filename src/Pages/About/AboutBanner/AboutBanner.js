import React from 'react';
import aboutBanner from '../../../assets/images/aboutBanner.jfif';

const AboutBanner = () => {
    return (
        <div className='hero container mx-auto lg:mb-16 mb-10'>
            <div className="hero-content flex-col lg:gap-20 gap-8 lg:flex-row-reverse  font-shippori tracking-wide">
                <div className='lg:w-1/2 w-full'>
                    <img src={aboutBanner} className="rounded-lg w-full " alt='' />
                </div>
                <div className='lg:w-1/2'>
                    <h4 className='text-xl text-secondary font-bold uppercase tracking-wider mb-3'>Since 2019</h4>
                    <h1 className="lg:text-6xl text-4xl font-semibold ">Keep your <span className='text-secondary tracking-wide'>Teeth <br /> Clean</span> & Shine</h1>
                    <p className="py-6 text-lg font-poppins">Dental care is the maintenance of healthy teeth and the practice of keeping the mouth and teeth clean pur sue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone.</p>
                    <p className='text-primary lg:text-2xl text-xl font-poppins font-semibold'>You need to brush your teeth everyday for healty teeth and simle</p>
                    
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;