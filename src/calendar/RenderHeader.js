import React from 'react';

const RenderHeader = ({ currentMonth }) => {
    return (
        <div className='flex justify-between w-full items-center p-3'>
            <div className='text-3xl'>{currentMonth.toLocaleString('ko-KR', { month: 'long' })}</div>
        </div>
    )
}

export default RenderHeader;