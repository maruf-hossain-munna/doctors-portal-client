import React from 'react';
import PrimaryButton from '../../ButtonComponents/PrimaryButton';

const AppointmentCard = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div>
            <div className="card  shadow-xl text-center">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-primary text-center">{name} </h2>
                    <p>{slots.length > 0 ? slots[0] : 'Try another day'} </p>
                    <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} avaialable </p>
                    <div className="card-actions justify-center">

                        <label
                            disabled={slots.length === 0}
                            onClick={() => setTreatment(appointment)}
                            htmlFor="booking-modal"
                            className='btn btn-primary'>Book Appointment
                        </label>


                        {/* <PrimaryButton onClick={ () => setTreatment(appointment)} > 
                            <label htmlFor="booking-modal" >Book Appointment</label>
                        </PrimaryButton> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;