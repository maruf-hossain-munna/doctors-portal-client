import React from 'react';
import { Link } from 'react-router-dom';

const DashboardSideBar = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className="drawer drawer-mobile">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col items-center justify-center">

                        {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                        <ul className="menu p-4 w-70 bg-base-100 py-0 text-base-content gap-4 text-xl font-shippori font-bold">

                            <li> <Link to='myAppintments'>My Appointments</Link> </li>
                        </ul>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-72 bg-base-100 text-base-content gap-4 text-xl font-shippori font-semibold">

                            <li> <Link to='myAppintments'>My Appointments</Link> </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardSideBar;