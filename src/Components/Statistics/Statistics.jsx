import React from 'react';
import { Pie, PieChart, Tooltip } from 'recharts';

const Statistics = () => {

    const assignments = [
        { id: 1, assignmentName: 'Assignment1', marks: 60 },
        { id: 2, assignmentName: 'Assignment2', marks: 60 },
        { id: 3, assignmentName: 'Assignment3', marks: 60 },
        { id: 4, assignmentName: 'Assignment4', marks: 55 },
        { id: 5, assignmentName: 'Assignment5', marks: 48 },
        { id: 6, assignmentName: 'Assignment6', marks: 55 },
        { id: 7, assignmentName: 'Assignment6', marks: 58 },
        { id: 8, assignmentName: 'Assignment6', marks: 58 }
    ];

    return (
        <div className='mt-5'>
            <h1 className='md:text-4xl font-bold'>My All Assignment Marks chart here</h1>
            <PieChart  className="mx-auto" width={300} height={300}>
                <Pie
                    dataKey="marks"
                    isAnimationActive={true}
                    data={assignments}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </div>
    );
};

export default Statistics;