import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='md:flex items-center md:bg-gray-100 md:text-start'>
            <div >
                <h1 className='text-5xl font-bold leading-tight md:ml-6'>One Step <br /> Closer To Your <br /><span className='header-text'>Dream Job</span></h1>

                <p className='text-1xl mt-3 md:ml-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>

                <button className='banner-button mt-5 md:ml-6'>Get Started</button>
            </div>

            <div>
                <img src="../../../public/Images/man.png" alt="" />
            </div>
        </div>
    );
};

export default Home;