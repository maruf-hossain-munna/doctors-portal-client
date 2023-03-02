import React from 'react';
import icon from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const reviewsData = [
        {
            id : 1,
            name: 'Winson Herry',
            location: 'California',
            img : people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            id : 2,
            name: 'Zayla Navy',
            location: 'Wasingtone',
            img : people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
        {
            id : 3,
            name: 'Nyra Elia',
            location: 'New york',
            img : people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        },
    ]


    return (
        <div className='mb-20 mt-28 lg:container lg:mx-auto mx-5'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-secondary text-xl uppercase font-shippori tracking-wide font-bold'>Testimonial</h4>
                    <h2 className='text-neutral lg:text-5xl text-3xl font-shippori font-semibold '>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-48' src={icon} alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-10'>
                {
                    reviewsData.map(review => <ReviewCard
                        key={review.id}
                        review={review}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;