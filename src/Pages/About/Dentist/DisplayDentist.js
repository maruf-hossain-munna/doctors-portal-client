import React from 'react';

const DisplayDentist = ({ dentist }) => {
    const { name, title, img } = dentist;
    return (
        <div>
            <div >
                <img src={img} alt="" />
                <div className='ml-6 mt-2'>
                    <h2 className="text-2xl font-shippori font-semibold">{name} </h2>
                    <p className='text-primary text-lg font-poppins font-semibold'>{title} </p>
                </div>
            </div>
        </div>
    );
};

export default DisplayDentist;