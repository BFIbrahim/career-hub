import React from 'react';
import './SingleFeatureJob.css'
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'


const SingleFeatureJob = ({ feturedJob }) => {
    // console.log(feturedJob);

    const detailsClick = () => {

    }
    return (
        <div>
            <div className='text-start mb-14 text-gray-600'>
                <img src={feturedJob.companyLogo} alt="" />
                <h1 className='mt-2 font-bold text-gray-600'>{feturedJob.jobTitle}</h1>
                <h5>{feturedJob.companyName}</h5>
                <button className='feature-btn mt-3 mb-3'>{feturedJob.remoteOrOnsite}</button>
                <button className='feature-btn ml-2 mt-3 mb-3'>{feturedJob.fulltimeOrParttime}</button><br />
                <p className='flex gap-2'>
                    <MapPinIcon className='w-6 h-6  text-gray-500'></MapPinIcon>
                    <span>{feturedJob.location}</span>
                </p>
                <p className='flex gap-2'>
                    <CurrencyDollarIcon className='w-6 h-6 text-gray-500'></CurrencyDollarIcon>
                    <span>Salary: {feturedJob.salary}</span><br />
                </p>

                <Link to={`/details/${feturedJob.id}`}><button className='deyails-btn'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleFeatureJob;