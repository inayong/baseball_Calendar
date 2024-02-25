import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuCalendarDays } from "react-icons/lu";
import PopUp from './comm/PopUp';

const Main = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [modalVisible, setModalVisible] = useState(true);

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <div className="h-screen bg-[url('https://i.ibb.co/KbpbBvG/IMG-0832.jpg')]">
            <div className='bg-gray-400 h-screen w-full bg-opacity-50 flex flex-col justify-center items-center'>
                <blockquote className="lg:text-6xl md:text-5xl text-3xl font-EFjejudoldam italic text-center text-slate-900 md:pt-20">
                    DAILY&nbsp;&nbsp;
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-red-500 relative inline-block">
                        <span className="relative text-white">HIT</span>
                    </span>
                    &nbsp;&nbsp;RECORD
                </blockquote>
                <div className="flex flex-col xl:text-2xl lg:text-xl md:text-lg font-bold mt-64 items-center">
                    <div className='lg:space-x-28 md:space-x-24 md:flex md:flex-row flex-col space-y-10 md:space-y-0'>
                        <Link to="/calendar"><div className="border-2 lg:p-10 p-5 text-center font-GiantsBold hover:animate-bounce">
                            야구 일정 보러가기
                        </div></Link>
                        <div className="border-2 lg:p-10 p-5 text-center font-GiantsBold hover:animate-bounce">
                            일정 등록 하러가기
                        </div>
                        <div className="border-2 lg:p-10 p-5 text-center font-GiantsBold hover:animate-bounce">
                            일기 쓰러가기
                        </div>
                    </div>
                    <div className='mt-20'>
                        <div className="relative">
                            <LuCalendarDays
                                className="text-gray-300 cursor-pointer md:ml-6 md:size-10 lg:size-12 size-8"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />
                            {isHovered && (
                                <div className="bg-gray-600 text-white rounded text-sm absolute mt-2 p-2 w-24 flex justify-center items-center">
                                    전체 캘린더
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {modalVisible && (
                    // <PopUp visible={modalVisible} closable={true} onClose={closeModal}/>
                    <PopUp closable={true} onClose={closeModal} />
                )}
            </div>
        </div>

    )
}

export default Main;