import React from 'react'
import { addMonths, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import RenderDays from './RenderDays';
import RenderHeader from './RenderHeader';
import RenderCells from './RenderCells';
import SkedButton from '../schedule/SkedButton';
import bbschedule from '../data/bbschedule.json';

const Calendar = () => {
  const currentDate = new Date();
  const selectDate = new Date();

  let currentMonth = new Date(format(currentDate, "yyyy"));
  let months = [];

  for (let i = 0; i < 12; i++) {
    months.push(
      <div key={i} className='space-y-10'>
        <RenderHeader currentMonth={currentMonth} />
        <RenderCells currentMonth={currentMonth} selectDate={selectDate} bbschedule={bbschedule} />
      </div>,
    );
    currentMonth = addMonths(currentMonth, 1);
  }

  console.log("data", bbschedule);


  return (
    // <div className='bg-[#022345] h-screen'>
    <div className='bg-white h-screen'>
      <div className='bg-[#022345] flex flex-col justify-center lg:mx-40 md:mx-20'>
        <div className='p-3 md:p-6 lg:p-10'>
          <div className='bg-[#022345] fixed top-0 lg:left-40 lg:right-40 lg:h-20 lg:px-10 right-0 left-0 md:left-20 md:right-20'>
            <div className='flex justify-between w-full items-center bg-[#022345] h-full'>
              <div className='flex space-x-1 md:space-x-3 lg:pl-20 md:pl-16 pl-8 text-white font-TheJamsil5Bold lg:text-xl md:text-lg text-xs'>
                <div>{currentDate.toLocaleString('ko-KR', { month: 'long' })}</div>
                <div>{format(currentDate, 'do', { locale: ko })}</div>
              </div>
              <div className='lg:text-4xl md:text-2xl text-lg text-white font-TheJamsil5Bold'>달력</div>
              <div className='lg:pr-20 md:pr-16 pr-8 text-white font-TheJamsil5Bold lg:text-2xl md:text-lg text-base'>{format(currentDate, 'yyyy')}</div>
            </div>
          </div>
          <div className='bg-[#022345] fixed lg:top-16 md:top-8 top-6 lg:left-40 md:left-24 left-3 lg:right-40 md:right-24 right-3 lg:h-8 md:h-5 h-3 lg:px-10 lg:pt-10 md:pt-8 pt-6'>
            <RenderDays />
          </div>
          <div className='bg-white lg:pt-28 pt-16 space-y-6 flex flex-col w-full'>{months}</div>
        </div>
      </div>
      <SkedButton />
    </div>
  )
}

export default Calendar