import React from 'react';
import { isSameDay, isSameMonth, addDays, format, startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';

const RenderCells = ({ currentMonth, selectDate, bbschedule }) => {
  // 월의 시작과 끝, 주의 시작과 끝을 계산합니다.
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const rows = [];
  let days = [];
  let day = startDate;
  let prevEvent = null; // 이전 일정을 추적하기 위한 변수를 초기화합니다.

  while (day <= endDate) {
    const formatDate = format(day, 'd');
    const dateKey = format(day, 'M-dd');

    // 현재 날짜에 해당하는 일정을 필터링합니다.
    const eventsForDay = bbschedule.filter(schedule => {
      const scheduleDate = format(new Date(schedule.date), 'M-dd');
      return scheduleDate === dateKey;
    });

    // 이전 일정과 현재 일정이 중복되는지 확인합니다.
    const hasDuplicate = isDuplicateEvent(prevEvent, eventsForDay);
    const uniqueEvent = hasDuplicate ? prevEvent : null;

    // 일자별로 일정을 화면에 표시합니다.
    days.push(
      <div key={dateKey} className={`flex w-1/6 lg:h-32 md:h-28 h-20 justify-center hover:bg-yellow-200 ${!isSameMonth(day, monthStart) ? 'text-gray-500 bg-transparent' : ''} ${isSameDay(day, selectDate) ? 'bg-blue-100 rounded-md' : ''} ${hasDuplicate ? 'bg-duplicate' : ''}`}>
        <div>
          <span className={`text-xs md:text-base lg:text-lg flex justify-center ${isSameDay(day, selectDate) ? 'underline underline-offset-4 text-lg' : ''}`}>
            {formatDate}
          </span>
          {hasDuplicate && isSameMonth(day, monthStart) && (
            <div className='flex flex-col justify-center items-center lg:pt-2'>
              <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className='text-xs lg:text-base'>{uniqueEvent.game}</div>
                <div className='text-[10px] lg:text-base'>{uniqueEvent.stadium}</div>
                <div className='text-[10px] lg:text-base'>{uniqueEvent.time}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );

    // 다음 날짜로 이동하고, 중복 여부를 판단하기 위해 현재 일정을 이전 일정으로 저장합니다.
    prevEvent = hasDuplicate ? prevEvent : eventsForDay[0];
    day = addDays(day, 1);
  }

  // 주별로 일정을 묶어 화면에 표시합니다.
  rows.push(
    <div key={rows.length} className='flex justify-between items-center'>
      {days}
    </div>,
  );

  return (
    <div className='flex flex-col font-TheJamsil5Bold'>{rows}</div>
  );
};

// 이전 일정과 현재 일정이 중복되는지 확인하는 함수입니다.
const isDuplicateEvent = (prevEvent, currentEvents) => {
  if (!prevEvent || currentEvents.length === 0) {
    // 이전 일정이 없거나 현재 일정이 없으면 중복이 아닙니다.
    return false;
  }

  // 현재 일정과 이전 일정의 time, game, stadium이 모두 일치하면 중복으로 간주합니다.
  const currentEvent = currentEvents[0];
  return (
    prevEvent.time === currentEvent.time &&
    prevEvent.game === currentEvent.game &&
    prevEvent.stadium === currentEvent.stadium
  );
};

export default RenderCells;
