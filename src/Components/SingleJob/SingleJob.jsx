import React from 'react';
import './Singlejob.css'

const SingleJob = ({job}) => {

    return (
        <div>
            <div className='text-start job-category'>
                <img src={job.image} alt="" />
                <h3 className='font-bold text-gray-600'>{job.name}</h3>
                <h5 className='text-gray-600'>{job.available_jobs}</h5>
            </div>
        </div>
    );
};

export default SingleJob;