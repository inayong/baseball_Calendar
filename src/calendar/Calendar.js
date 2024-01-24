import React from 'react'
import { addMonths, format } from 'date-fns';
import { ko } from 'date-fns/locale';
import RenderDays from './RenderDays';
import RenderHeader from './RenderHeader';
import RenderCells from './RenderCells';

const Calendar = () => {
  const currentDate = new Date();
  const selectDate = new Date();

  let currentMonth = new Date(format(currentDate, "yyyy"));
  let months = [];

  for (let i = 0; i < 12; i++) {
    months.push(
      <div>
        <RenderHeader currentMonth={currentMonth} />
        <RenderCells currentMonth={currentMonth} selectDate={selectDate} />
      </div>,
    );
    currentMonth = addMonths(currentMonth, 1);
  }


  return (
    <div className='bg-slate-100 h-screen'>
      <div className='bg-yellow-100 flex flex-col justify-center mx-40'>
        <div className='p-10'>
          <div className='bg-green-100 mb-3'>
            <div className='flex justify-between w-full items-center p-3'>
              <div>{format(currentDate, 'do', { locale: ko })}</div>
              <div className='text-3xl'>{currentDate.toLocaleString('ko-KR', { month: 'long' })}</div>
              <div>{format(currentDate, 'yyyy')}</div>
            </div>
          </div>
          <div className='bg-orange-100 w-full'>
            <RenderDays />
          </div>
          <div>{months}</div>
        </div>
      </div>
    </div>
  )
}

export default Calendar