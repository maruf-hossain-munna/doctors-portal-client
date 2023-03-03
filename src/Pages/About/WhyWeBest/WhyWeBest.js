import React from 'react';
import bestBanner from '../../../assets/images/whyBest.jfif';
import doctor from '../../../assets/icons/doctor.png';
import care from '../../../assets/icons/care.png';
import medicine from '../../../assets/icons/medicine.png';


const WhyWeBest = () => {
    return (
        <div className='hero container mx-auto'>
            <div className="hero-content flex-col lg:gap-28 gap-8 lg:flex-row font-shippori tracking-wide">
                <div className='lg:w-1/2 '>
                    <img src={bestBanner} className="rounded-lg w-full " alt='' />
                </div>
                <div className='lg:w-1/2'>
                    <h4 className='text-xl text-secondary font-bold uppercase tracking-wider mb-3'>Why we best </h4>
                    <h1 className="lg:text-6xl text-4xl font-semibold mb-4">People <span className='text-secondary tracking-wide'>Choose </span> </h1>
                    <h1 className="lg:text-6xl text-4xl font-semibold "> <span className='text-secondary tracking-wide'> Us</span> Because...</h1>
                    <p className="py-6 text-lg font-poppins">Dental care is the maintenance of healthy teeth and the practice of keeping the teeth clean.</p>

                    <div className='grid gap-6 lg:w-3/4'>

                        <div className='flex gap-5 items-center'>
                            <div>
                                <img className='w-24' src={doctor} alt="" />
                            </div>
                            <div>
                                <h2 className='text-secondary text-2xl font-semibold'>Expert Dentist</h2>
                                <p className='text-lg font-poppins'>Dental care is the maintenance of healthy teeth and smile</p>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <div>
                                <img className='w-24' src={care} alt="" />
                            </div>
                            <div>
                                <h2 className='text-secondary text-2xl font-semibold'>24/12 Advance Care</h2>
                                <p className='text-lg font-poppins'>Dental care is the maintenance of healthy teeth and smile</p>
                            </div>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <div>
                                <img className='w-24' src={medicine} alt="" />
                            </div>
                            <div>
                                <h2 className='font-shippori tracking-wide text-secondary text-2xl font-semibold'>Available Products</h2>
                                <p className='text-lg font-poppins'>Dental care is the maintenance of healthy teeth and smile</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyWeBest;