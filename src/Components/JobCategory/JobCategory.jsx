import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from '../SingleJob/SingleJob';

const JobCategory = () => {

    const jobs = useLoaderData()

    return (
        <div className=' mt-20'>
            <div className='mb-10 text-gray-800'>
                <h1 className='text-3xl font-bold'>BFC Job Category</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:flex justify-around'>
                {
                    jobs.map(job => <SingleJob
                        key={job.id}
                        job={job}
                    ></SingleJob>)
                }
            </div>
        </div>

    );
};

export default JobCategory;