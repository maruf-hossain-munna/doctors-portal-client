import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardSideBar from '../Shared/DashboardSideBar/DashboardSideBar';
import NavBar from '../Shared/Navbar/NavBar';

const DashboardLayout = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <div className='flex'>
                <div className='lg:w-80 w-full'>
                    <DashboardSideBar></DashboardSideBar>
                </div>
                <div className=' w-full h-full'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;