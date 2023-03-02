import React from 'react';
import implent from '../../../assets/icons/implent.png';
import whitening from '../../../assets/icons/whitening.png';
import crown from '../../../assets/icons/crown.png';

const HaveDone = () => {
    return (
        <div className='lg:container lg:mx-auto mx-5 tracking-wide lg:my-20'>
            <h4 className='text-xl text-center text-secondary font-shippori font-bold uppercase mb-4'>Succesfully We have done </h4>

            <div className='flex justify-center'>
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-32 gap-8 my-6'>
                    <div className='flex items-center gap-7'>
                        <div>
                            <img className='w-18' src={implent} alt="" />
                        </div>
                        <div>
                            <h2 className="text-primary font-shippori font-bold lg:text-5xl text-3xl">785 </h2>
                            <p className='text-xl font-poppins font-semibold'>Dental implent</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7'>
                        <div>
                            <img className='w-18' src={whitening} alt="" />
                        </div>
                        <div>
                            <h2 className="text-primary font-shippori font-bold lg:text-5xl text-3xl">905 </h2>
                            <p className='text-xl font-poppins font-semibold'>Teeth Whitening</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-7'>
                        <div>
                            <img className='w-18' src={crown} alt="" />
                        </div>
                        <div>
                            <h2 className="text-primary font-shippori font-bold lg:text-5xl text-3xl">687</h2>
                            <p className='text-xl font-poppins font-semibold'>Dental Crown</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HaveDone;