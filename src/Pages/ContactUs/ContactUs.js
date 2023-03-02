import React from 'react';
import bgFrm from '../../assets/images/appointment.png'
import PrimaryButton from '../../ButtonComponents/PrimaryButton';

const ContactUs = () => {
    return (
        <section className=''
        style={{background : `url(${bgFrm})`}}>
            <div className='py-12 max-w-[500px] mx-auto '>
                <form className='text-center'>
                    <h5 className='text-secondary text-lg font-bold'>Contact Us</h5>
                    <h3 className='text-4xl mb-10 text-white'>Stay connected with us</h3>

                    <div className=''>
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='my-4'>
                        <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='mb-4'>
                        <textarea className="textarea textarea-bordered w-80" placeholder="Your Message"></textarea>
                    </div>
                    <PrimaryButton >Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;