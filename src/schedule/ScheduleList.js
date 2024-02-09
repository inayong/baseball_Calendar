import { format } from 'date-fns';
import React from 'react';
import { FaXmark } from "react-icons/fa6";

const ScheduleList = ({ setIsModalOpen, date }) => {
    // const formattedDate = format(date, 'M-dd');

    return (
        <div className='bg-black bg-opacity-50 fixed top-0 left-0 w-full h-full flex justify-center items-center'>
            <div className='bg-white flex items-center flex-col w-1/2 h-5/6'>
                <div className='flex items-center w-full justify-between h-16 my-3'>
                    <div className=' w-5/6 flex justify-center h-full items-center'>
                        <div className='border-2 rounded-lg w-3/5 py-2 flex justify-center items-center text-xl'>{format(date, 'M월 dd일')}</div>
                    </div>
                    <button onClick={() => setIsModalOpen(false)} className='w-1/6 flex justify-center'><FaXmark size={40} /></button>
                </div>
                <div className='bg-green-50 flex-grow w-full'>
                    <div className='flex-grow'>
                        <div className='bg-gray-200'>스케줄 목록</div>
                        <div className=''>내용</div>
                    </div>
                    <div className='flex-grow'>
                        <div className='bg-gray-200'>ToDo</div>
                        <div>내용</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ScheduleList;