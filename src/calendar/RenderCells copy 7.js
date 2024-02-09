import { addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek, isSameDay, isSameMonth } from 'date-fns';
import React from 'react';

const RenderCells = ({ currentMonth, selectDate, bbschedule }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formatDate = '';
    let prevEvent = null;

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formatDate = format(day, 'd');
            const dateKey = format(day, 'M-dd');
            // const eventForDay = bbschedule.find(schedule => {
            //     const scheduleDate = format(new Date(schedule.date), 'M-dd');
            //     return scheduleDate === dateKey;
            // });
            const eventForDay = bbschedule.filter((event) => isSameDay(new Date(event.date), day));

            console.log('day:', day);
            console.log('dateKey:', dateKey);
            console.log('eventForDay:', eventForDay);

            if (eventForDay.length > 0) {
                const isConsecutiveSame = (
                    prevEvent &&
                    eventForDay[0].time === prevEvent.time &&
                    eventForDay[0].game === prevEvent.game &&
                    eventForDay[0].stadium === prevEvent.stadium
                );

                if (isConsecutiveSame) {
                    days[days.length - 1] = (
                        <div key={i} className={`flex w-1/6 lg:h-32 md:h-28 h-20 justify-center hover:bg-yellow-200 ${!isSameMonth(day, monthStart) ? 'text-gray-500 bg-transparent' : ''} ${isSameDay(day, selectDate) ? 'bg-blue-100 rounded-md' : ''} `}>
                            <span className={`text-xs md:text-base lg:text-lg flex justify-center ${isSameDay(day, selectDate) ? 'underline underline-offset-4 text-lg' : ''}`}>
                                {formatDate}
                            </span>
                        </div>
                    );
                } else {
                    days.push(
                        <div key={i} className={`flex w-1/6 lg:h-32 md:h-28 h-20 justify-center hover:bg-yellow-200 ${!isSameMonth(day, monthStart) ? 'text-gray-500 bg-transparent' : ''} ${isSameDay(day, selectDate) ? 'bg-blue-100 rounded-md' : ''} `}>
                            <div>
                                <span className={`text-xs md:text-base lg:text-lg flex justify-center ${isSameDay(day, selectDate) ? 'underline underline-offset-4 text-lg' : ''}`}>
                                    {formatDate}
                                </span>
                                {eventForDay && isSameMonth(day, monthStart) && (
                                    <div className='flex flex-col justify-center items-center lg:pt-2'>
                                        <div className='flex flex-col lg:flex-row justify-center items-center'>
                                            <div className='text-xs lg:text-base'>{eventForDay.game}</div>
                                            <div className='text-[10px] lg:text-base'>{eventForDay.stadium}</div>
                                        </div>
                                        <div className='text-[10px] lg:text-base'>{eventForDay.time}</div>
                                    </div>
                                )}
                            </div>
                        </div>,
                    );
                }
                prevEvent = eventForDay[0];
            } else {
                days.push(
                    <div
                        key={i}
                        className={`flex w-1/6 lg:h-32 md:h-28 h-20 justify-center hover:bg-yellow-200 ${!isSameMonth(day, monthStart) ? 'text-gray-500 bg-transparent' : ''} ${isSameDay(day, selectDate) ? 'bg-blue-100 rounded-md' : ''}`}
                    >
                        <span className={`text-xs md:text-base lg:text-lg flex justify-center ${isSameDay(day, selectDate) ? 'underline underline-offset-4 text-lg' : ''}`}>
                            {format(day, 'd')}
                        </span>
                    </div>
                );

                prevEvent = null;
            }
            day = addDays(day, 1);
        }
        rows.push(
            <div key={rows.length} className='flex justify-between items-center'>
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