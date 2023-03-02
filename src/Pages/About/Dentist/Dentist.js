import React, { useEffect, useState } from 'react';
import DisplayDentist from './DisplayDentist';

const Dentist = () => {
    const [dentists, setDentist] = useState([]);
    useEffect(() => {
        fetch('dentist.json')
            .then(res => res.json())
            .then(data => setDentist(data))
    }, [])

    return (
        <div className='lg:container lg:mx-auto mx-5 tracking-wide lg:mt-20 mt-14'>
            <h4 className='text-xl text-center text-secondary font-shippori font-bold uppercase tracking-wider mb-4'>Dentist </h4>
            <h1 className="lg:text-6xl text-4xl text-center font-shippori font-semibold">Meet <span className='text-secondary tracking-wide'>Our <br /> Expert</span> Dentist</h1>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-12'>
                {
                    dentists.map(dentist => <DisplayDentist
                        key={dentist.id}
                        dentist ={dentist}
                    ></DisplayDentist>)
                }
            </div>
        </div>
    );
};

export default Dentist;