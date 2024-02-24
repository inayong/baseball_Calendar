import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="h-screen bg-[url('https://i.ibb.co/KbpbBvG/IMG-0832.jpg')]">
            <div className='bg-gray-400 h-screen w-full bg-opacity-50 flex flex-col justify-center items-center'>
                {/* <div className='font-PermanentMarker text-8xl'>Daily Hit Record</div> */}
                {/* <div className='font-EFjejudoldam text-6xl'>DAILY HIT RECORD</div> */}
                <blockquote class="text-6xl font-EFjejudoldam italic text-center text-slate-900">
                    DAILY&nbsp;&nbsp;
                    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
                        <span class="relative text-white">HIT</span>
                    </span>
                    &nbsp;&nbsp;RECORD
                </blockquote>

                <div className="flex space-x-28 text-3xl font-bold mt-64">
                    <Link to="/calendar"><div className="border-2 p-14 font-GiantsBold hover:animate-bounce">
                        야구 일정 보러가기
                    </div></Link>
                    <div className="border-2 p-14 font-GiantsBold hover:animate-bounce">
                        일정 등록 하러가기
                    </div>
                    <div className="border-2 p-14 font-GiantsBold hover:animate-bounce">
                        일기 쓰러가기
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main;