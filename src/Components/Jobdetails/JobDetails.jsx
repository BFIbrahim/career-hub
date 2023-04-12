import React from 'react';
import './JobDetails.css'
import { Link, useLoaderData } from 'react-router-dom';
import { CalendarDaysIcon, CurrencyDollarIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

const JobDetails = () => {

     const singleJobDetail = useLoaderData()

    const { jobDescription, jobResponsibility, educationalRequirements, experiences, salary, jobTitle, contactInformation, location } = singleJobDetail

    return (
        <div>
            <div className='bg-gray-100 p-14 details-page'>
                <h1 className='font-bold text-2xl '>Job Details</h1>
            </div>


            <div className='w-4/5 mx-auto md:flex gap-14  mt-14 items-center'>
                <div className='text-start leading-8 md:w-3/6'>
                    <p><strong>job Description:</strong> {jobDescription}</p>
                    <p><strong>job Responsibility: </strong> {jobResponsibility}</p>
                    <p><strong>Educational Requirements:</strong></p>
                    <p>{educationalRequirements}</p>
                    <p><strong>Experiences</strong></p>
                    <p>{experiences}</p>
                </div>

                <div className='p-10 bg-gray-100 rounded-sm mt-5'>
                    <h3 className='border-b-2 border-purple-300'>Job Details</h3><br />
                    <p className='flex gap-5'>
                    <span><CurrencyDollarIcon className='w-6 h-6 text-purple-400'></CurrencyDollarIcon></span>
                    <span>Salary: {salary}</span>
                    </p><br />

                    <p className='flex gap-5 border-b-2 border-purple-300 pb-4'>
                        <CalendarDaysIcon className='w-6 h-6 text-purple-400'></CalendarDaysIcon>
                        <span>Job Title: {jobTitle}</span>
                    </p><br />
                    

                    <p className='flex gap-5'>
                        <PhoneIcon  className='w-6 h-6 text-purple-400'></PhoneIcon>
                        <span>Contact: {contactInformation}</span>
                    </p><br />

                    <p className='flex gap-5'>
                        <MapPinIcon  className='w-6 h-6 text-purple-400'></MapPinIcon>
                        <span>Location: {location}</span>
                    </p>

                    <Link to="/applied Jobs"><button className='apply-btn mt-10 w-5/5'>Apply Now</button></Link>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;

