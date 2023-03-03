import React from 'react';
import { Link } from 'react-router-dom';
import dentalImg from '../../assets/images/treatment.png';
import PrimaryButton from '../../ButtonComponents/PrimaryButton';

const DentalCare = () => {
    return (
        <div>
            <div className="hero lg:my-14 ">
                <div className="hero-content flex-col gap-8 lg:flex-row">
                    <div className='lg:w-1/2'>
                        <img src={dentalImg} alt='' className="max-w-sm rounded-lg shadow-2xl mx-auto" />
                    </div>
                    <div className='lg:w-1/2'>
                        <h1 className="lg:text-6xl text-4xl font-shippori text-neutral font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton ><Link to='/appointment'>Get Started </Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;