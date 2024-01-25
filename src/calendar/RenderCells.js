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
                <div className={`flex w-1/6 lg:h-32 md:h-28 h-20 justify-center hover:bg-yellow-200 ${!isSameMonth(day, monthStart) ? 'text-gray-500' : ''} ${isSameDay(day, selectDate) ? 'bg-blue-100 rounded-md' : ''} `}>
                    <span className={`text-xs md:text-base lg:text-lg ${isSameDay(day, selectDate) ? 'underline underline-offset-4 text-lg' : ''}`}>
                        {formatDate}
                    </span>
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
    <div className='flex flex-col font-TheJamsil5Bold'>{rows}</div>
  )
}

export default RenderCells;