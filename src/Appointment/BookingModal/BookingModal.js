import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Pages/Contexts/AuthProvider/AuthProvider';

const BookingModal = ({ treatment, setTreatment, selectDate , refetch}) => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { name, slots } = treatment;
    const date = format(selectDate, 'PP');

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        // const name = form.name.value;
        const name = user?.displayName;
        const email = user?.email;
        const phone = form.phone.value;
        const booking = {
            appointmentDate: date,
            treatment: treatment.name,
            patient: name,
            email,
            phone,
            slot
        }

        fetch('https://doctor-portal-server-blue.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTreatment(null);
                toast.success('Your appointment booking successful');
                refetch();
            })

        
        // console.log(booking);
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> {name}</h3>

                    <form
                        onSubmit={handleSubmit}
                        className='grid grid-cols-1 gap-4 my-6'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map(slot => <option value={slot}>{slot} </option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className='btn btn-neutral w-full' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;