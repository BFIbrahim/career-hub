import React, { useEffect, useState } from 'react';
import SingleFeatureJob from '../SingleFeatureJob/SingleFeatureJob';
import { useLoaderData } from 'react-router-dom';

const FeaturedJobs = () => {

    // const [feturedJobs, setFeaturedJob] = useState([]);

    // useEffect(() => {
    //     fetch('/FeaturedJob.json')
    //         .then(res => res.json())
    //         .then(data => setFeaturedJob(data))
    // }, [])

    const feturedJobs = useLoaderData()

    return (
        <div>
            <div className='mt-10'>
                <h1 className='font-bold text-gray-800 text-3xl'>BFC Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='md:grid grid-cols-2 mt-12 md:ml-14'>
                {
                    feturedJobs.map(feturedJob => <SingleFeatureJob
                        key={feturedJob.id}
                        feturedJob={feturedJob}
                    ></SingleFeatureJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;