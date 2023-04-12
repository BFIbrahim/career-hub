import React from 'react';
import './JobDetails.css'
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const singleJobDetail =  useLoaderData()
    
    return (
        <div>
            <div className='bg-gray-100 p-14 details-page'>
                <h1 className='font-bold text-2xl '>Job Details</h1>
            </div> 


            <div>
                
            </div>
        </div>
    );
};

export default JobDetails;