import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Pages/Contexts/AuthProvider/AuthProvider';
import DsiplayAppointment from '../DsiplayAppointment/DsiplayAppointment';

const MyAppintments = () => {
    const { user } = useContext(AuthContext);

    const [myAppointments, setMyAppointments] = useState([])
    useEffect(() => {
        fetch(`http://doctor-portal-server-blue.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyAppointments(data))
    }, [user])
    console.log(myAppointments);

    return (
        <div className='bg-[#F1F5F9] lg:p-14 p-4 h-full w-full'>

            <div>
                <h1 className="text-3xl mb-7 font-shippori ">My Appointments </h1>
            </div>

            <div className="overflow-x-auto  h-full  rounded-xl">
                <table className="table w-full">

                    <thead>
                        <tr className='font-shippori tracking-wider'>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody className='font-poppins'>

                        {
                            myAppointments.map((myAppointment, i) => <tr key={myAppointment._id}>
                                <th> {i + 1} </th>
                                <td> {myAppointment.patient} </td>
                                <td> {myAppointment.treatment} </td>
                                <td> {myAppointment.slot} </td>
                                <td> {myAppointment.phone} </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppintments;