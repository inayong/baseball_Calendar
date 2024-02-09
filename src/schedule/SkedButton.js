import React, { useState } from 'react';
import { LuCalendarPlus, LuPlus, LuBookPlus } from "react-icons/lu";

const SkedButton = () => {
    const [clickAdd, setClickAdd] = useState(false);
    const handleClick = () => {
        setClickAdd(!clickAdd);
    }

    return (
        <div className='flex flex-col'>
            {clickAdd ? (
                <>
                    <button onClick={handleClick} className='fixed bottom-[180px] right-10 bg-[#022345] p-5 rounded-full'>
                        <LuBookPlus size={20} className='text-white' />
                    </button>
                    <button onClick={handleClick} className='fixed bottom-[110px] right-10 bg-[#022345] p-5 rounded-full'>
                        <LuCalendarPlus size={20} className='text-white' />
                    </button>
                </>
            ) : ('')}
            <button onClick={handleClick} className='fixed bottom-10 right-10 bg-[#022345] p-5 rounded-full'>
                <LuPlus size={20} className='text-white' />
            </button>
        </div>
    )
}

export default SkedButton;