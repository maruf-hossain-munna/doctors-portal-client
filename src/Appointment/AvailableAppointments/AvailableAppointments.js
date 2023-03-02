import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loader from '../../Shared/Loader/Loader';
import AppointmentCard from '../AppointmentCard/AppointmentCard';
import BookingModal from '../BookingModal/BookingModal';

const AvailableAppointments = ({ selectDate }) => {
    // const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectDate, 'PP')

    const { data: appointments =[], refetch , isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`https://doctor-portal-server-blue.vercel.app/appointmentOptions?date=${date}`)
            .then(res => res.json())
    });

    if(isLoading){
        return <Loader></Loader>
    }

    // useEffect(() => {
    //     fetch('https://doctor-portal-server-blue.vercel.app/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [])


    return (
        <div>
            <p className='text-secondary text-center font-bold'>
                Available Appointments on {format(selectDate, 'PP')}
            </p>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 my-16'>
                {
                    appointments.map(appointment => <AppointmentCard
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></AppointmentCard>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectDate={selectDate}
                    setTreatment={setTreatment}
                    refetch= {refetch}
                ></BookingModal>
            }
        </div>
    );
};

export default AvailableAppointments;