import React from 'react';
import clockIcon from '../../../assets/icons/clock.svg' ;
import locationIcon from '../../../assets/icons/marker.svg' ;
import phoneIcon from '../../../assets/icons/phone.svg' ;

const BannerCard = () => {
    return (
        <div className='pb-10 lg:pt-20 lg:container lg:mx-auto mx-4'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                <div className='max-w-[450px] flex items-center bg-primary px-6 py-12 rounded-2xl '>
                    <div>
                        <img className='w-3/4' src={clockIcon} alt="" />
                    </div>
                    <div className='text-white'>
                        <h5 className='font-bold text-xl font-poppins  '>Opening Hours</h5>
                        <p className='text-sm '>Lorem Ipsum is simply dummy text of <br /> the pri</p>
                    </div>
                </div>

                <div className=' max-w-[450px] flex items-center bg-neutral px-6 py-12 rounded-2xl '>
                    <div>
                        <img className='w-3/4' src={locationIcon} alt="" />
                    </div>
                    <div className='text-white'>
                        <h5 className='font-bold text-xl font-poppins  '>Visit our location</h5>
                        <p className='text-sm '>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>

                <div className='max-w-[450px] flex items-center bg-primary px-6 py-12 rounded-2xl '>
                    <div>
                        <img className='w-3/4 text-white' src={phoneIcon} alt="" />
                    </div>
                    <div className='text-white'>
                        <h5 className='font-bold text-xl font-poppins  '>Contact us now</h5>
                        <p className='text-sm '>+000 123 456789</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BannerCard;