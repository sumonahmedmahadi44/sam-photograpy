import React from 'react';

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className='text-center w-4/12 mx-auto mb=12'>
            <p className=' text-teal-200 uppercase font-mono mb-2 '>---{subHeading}---</p>
            <p className='text-3xl border-y-4 p-4 uppercase '>{heading}</p>
        </div>
    );
};

export default SectionTitle;