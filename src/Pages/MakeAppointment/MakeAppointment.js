import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../../ButtonComponents/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section
            className='lg:mt-32 mt-12 lg:mb-12 bg-cover'
            style={{ background: `url(${appointment})` }}>

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 hidden lg:block'>
                        <img src={doctor} alt='' className="-mt-32 " />
                    </div>
                    <div className='lg:w-1/2 text-white'>
                        <h4 className='text-lg text-primary font-bold'>Appointment</h4>
                        <h1 className="text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton ><Link to='/appointment'>Get Appointment</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;