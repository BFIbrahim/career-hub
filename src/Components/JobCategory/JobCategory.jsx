import React, { useEffect, useState } from 'react';

const JobCategory = () => {


        const [jobData, setJobData] = useState([])

        useEffect(() =>{
            fetch('Job-category.json')
            .then(res => res.json())
            .then(data => setJobData(data))
        }, [])

        const allJobData = jobData;
        console.log(allJobData);




    return (
        <div>
            <div>
                <img src="" alt="" />
                
            </div>

            <div>

            </div>

            <div>

            </div>

            <div>

            </div>
        </div>
    );
};

export default JobCategory;