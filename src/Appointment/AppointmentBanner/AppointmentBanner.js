
import banner from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({selectDate, setSelectDate }) => {
    
    return (
        <div className='hero w-full bg-cover my-12' style={{ background : `url(${bg})`}}>
        <div className="hero-content flex-col lg:flex-row-reverse py-10 ">
            <div className='lg:w-1/2 lg:mr-5'>
                <img src={banner} className="rounded-lg shadow-2xl" alt='' />
            </div>
            <div className='lg:w-1/2 mx-auto'>
                <DayPicker 
                    mode='single'
                    selected={selectDate}
                    onSelect={setSelectDate}
                />
                <p>you have selected date: { format( selectDate, 'PP')}. </p>
            </div>
        </div>

        
    </div>
    );
};

export default AppointmentBanner;