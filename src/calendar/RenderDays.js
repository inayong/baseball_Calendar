import React from 'react';

const RenderDays = () => {
    const days = [];
    const date = ['일', '월', '화', '수', '목', '금', '토'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div>
                {date[i]}
            </div>,
        );
    }
  return (
    <div className='flex justify-between'>{days}</div>
  )
}

export default RenderDays;