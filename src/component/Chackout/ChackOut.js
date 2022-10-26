import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChackOut = () => {
    const data =useLoaderData()
     const {titel}=data
    return (
        <div>
            <h1>{titel}</h1>
            
        </div>
    );
};

export default ChackOut;