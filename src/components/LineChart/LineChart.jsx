import React from 'react';
import { LineChart as LC, Line } from 'recharts';

const LineChart = () => {
    const data = [
        { id: 1, name: 'Alice', math: 78 },
        { id: 2, name: 'Bob', math: 80 },
        { id: 3, name: 'Charlie', math: 95 },
        { id: 4, name: 'David', math: 90 },
        { id: 5, name: 'Emma', math: 68 },
        { id: 6, name: 'Frank', math: 97 },
        { id: 7, name: 'Grace', math: 85 },
        { id: 8, name: 'Hannah', math: 77 },
        { id: 9, name: 'Ian', math: 84 },
        { id: 10, name: 'Jack', math: 92 }
    ];
    return (
        <div>
            <LC width={400} height={400} data={data}>
                <Line dataKey="math" ></Line>
            </LC>
        </div>
    );
};

export default LineChart;