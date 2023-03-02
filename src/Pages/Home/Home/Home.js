import React from 'react';
import ContactUs from '../../ContactUs/ContactUs';
import DentalCare from '../../DentalCare/DentalCare';
import MakeAppointment from '../../MakeAppointment/MakeAppointment';
import Reviews from '../../Reviews/Reviews';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import BannerCard from '../Banner/BannerCard';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;