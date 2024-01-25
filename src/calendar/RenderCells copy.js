import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, isSameDay, isSameMonth } from 'date-fns';
import React from 'react';

const RenderCells = ({ currentMonth, selectDate }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formatDate = '';

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formatDate = format(day, 'd');
            days.push(
                <div className={`flex border border-black ${!isSameMonth(day, monthStart) ? 'opacity-50' : ''} ${isSameDay(day, selectDate) ? 'bg-red-200 font-bold' : ''} ${!isSameDay(day, selectDate) && isSameMonth(day, monthStart) ? 'border' : ''} `}>
                    {/* <span className=''> */}
                        {formatDate}
                    {/* </span> */}
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className='flex justify-between items-center'>
                {days}
            </div>,
        );
        days = [];
    }
  return (
    <div className='flex flex-col'>{rows}</div>
  )
}

export default RenderCells;