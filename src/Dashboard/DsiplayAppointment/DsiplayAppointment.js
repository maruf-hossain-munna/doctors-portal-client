import React from 'react';

const DsiplayAppointment = ({ myAppointment }) => {
    const { patient, phone, slot, treatment } = myAppointment;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                            <th>Phone Number</th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th> </th>
                            <td>{patient} </td>
                            <td>{treatment} </td>
                            <td>{slot} </td>
                            <td>{phone} </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DsiplayAppointment;