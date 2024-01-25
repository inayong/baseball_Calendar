import React from 'react';

const RenderDays = () => {
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className='flex lg:w-1/6 md:w-1/2 w-5 max-[200px]:w-0 justify-center rounded-full bg-[#60B0E3] lg:mx-5 mx-4 font-bold lg:text-lg md:text-lg text-base'>
                {date[i]}
            </div>,
        );
    }
  return (
    <div className='flex justify-between w-full bg-white h-full items-center'>{days}</div>
  )
}

export default RenderDays;