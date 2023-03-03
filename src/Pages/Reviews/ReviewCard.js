import React from 'react';

const ReviewCard = ({ review }) => {
    const { img, name, location, description } = review;
    return (
        <div className='card rounded-xl shadow-xl hover:shadow-primary py-8 px-10'>
            <div className='flex items-center mb-3'>

                <div className="avatar">
                    <div className=" w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='w-20 ' src={img} alt="" />
                    </div>
                </div>

                <div className='ml-4'>
                    <h5 className='text-neutral text-lg font-semibold'> {name} </h5>
                    <p> {location} </p>
                </div>
            </div>
            <div>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ReviewCard;