import React from 'react';
import banner from '../../../assets/images/chair.png';
import bgimg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../ButtonComponents/PrimaryButton';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='hero container mx-auto'>
            <div className="hero-content flex-col lg:flex-row-reverse py-10 ">
                <div className='lg:w-1/2 lg:mr-5'>
                    <img src={banner} className="rounded-lg shadow-2xl" alt='' />
                </div>
                <div className='lg:w-1/2'>
                    <h1 className="lg:text-6xl text-4xl tracking-wide font-shippori font-bold">Your New <span className='text-secondary tracking-wide'>Smile Starts</span>  Here</h1>
                    <p className="py-6 text-lg font-poppins">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton ><Link to='/appointment'>Get Started </Link></PrimaryButton>
                </div>
            </div>

            
        </div>
    );
};

export default Banner;