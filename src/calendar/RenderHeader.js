import React from 'react';

const RenderHeader = ({ currentMonth }) => {
    return (
        <div className='flex justify-center'>
            <div className='text-3xl font-GiantsInline text-[#D00E31]'>{currentMonth.toLocaleString('en-US', { month: 'long' })}</div>
        </div>
    )
}

export default RenderHeader;