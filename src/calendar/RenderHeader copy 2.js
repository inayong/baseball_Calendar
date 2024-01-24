import { format } from 'date-fns';
import React from 'react';
import { ko } from 'date-fns/locale';

const RenderHeader = ({ currentDate,  }) => {
    return (
        <div className='flex justify-between w-full items-center p-3'>
            <div>{format(currentDate, 'do', { locale: ko })}</div>
            <div className='text-3xl'>{currentDate.toLocaleString('ko-KR', { month: 'long' })}</div>
            <div>{format(currentDate, 'yyyy')}</div>
        </div>
    )
}

export default RenderHeader;