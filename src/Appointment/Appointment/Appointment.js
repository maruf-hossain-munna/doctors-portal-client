import React, { useState } from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner
                selectDate={selectDate}
                setSelectDate={setSelectDate}
            ></AppointmentBanner>

            <AvailableAppointments
                selectDate={selectDate}
                setSelectDate={setSelectDate}
            ></AvailableAppointments>
        </div>
    );
};

export default Appointment;