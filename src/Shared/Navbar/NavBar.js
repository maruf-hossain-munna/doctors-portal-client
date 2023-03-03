import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../ButtonComponents/PrimaryButton';
import { AuthContext } from '../../Pages/Contexts/AuthProvider/AuthProvider';

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err))
    }

    const menuItems = <React.Fragment>
        <li> <Link to='/'>Home</Link> </li>
        <li> <Link to='/appointment'>Appointment</Link> </li>
        <li> <Link to='/about'>About</Link> </li>
        {/* <li> <Link to='/reviews'>Reviews</Link> </li> */}

        {
            user?.uid ?
                <>
                    <li> <Link to='/dashboard'>Dashboard</Link> </li>
                    <li> <button onClick={handleLogOut}>Log out</button> </li>
                </>
                :
                <li> <PrimaryButton><Link to='/login'>Login</Link></PrimaryButton> </li>
        }
    </React.Fragment>


    return (
        <div>
            <div className="navbar bg-base-100 flex font-poppins tracking-wide justify-between container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case font-semibold text-xl tracking-wide"><span className='text-blue-600 hover:text-black mr-2'>Doctors </span> <span className='text-red-600 hover:text-black'> Portal </span></Link>
                </div>
                <div className="navbar-center text-xl  font-semibold hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 p-3 font-poppins">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;