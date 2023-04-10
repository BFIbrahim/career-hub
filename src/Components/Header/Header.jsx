import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='flex items-center justify-between w-5/6 mx-auto mb-3'>
            <div>
                <Link to='/' className='inline-flex items-center'>
                    <span className='ml-2 text-xl font-bold tracking-wide'>
                        Big Future Career
                    </span>
                </Link>
            </div>

            <div className='flex justify-between'>
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/Statistics'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Statistics
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/Applied Jobs'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Applied Jobs
                        </NavLink>

                    </li>

                    <li>
                        <NavLink
                            to='/Blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>

                    </li>
                </ul>
            </div>

            <div>
                <button className='apply-btn'>Star Applying</button>
            </div>
        </div>
    );
};

export default Header;