import React from 'react';

const Main = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            {/* <div className="h-screen flex justify-center items-center bg-[url('https://i.ibb.co/zJsH3Cn/sanggaunsplash.jpg')] bg-[rgba(255, 255, 255, 0.5)]"></div> */}
            {/* <div className="h-screen flex justify-center items-center bg-[url('https://i.ibb.co/LRtDVHv/jose-martin-ramirez-carrasco-45sj-Aj-Sj-Ar-Q-unsplash.jpg')] bg-cover"></div> */}
            <div
                className="bg-cover w-full h-full"
                style={{
                    backgroundImage: 'url("https://i.ibb.co/LRtDVHv/jose-martin-ramirez-carrasco-45sj-Aj-Sj-Ar-Q-unsplash.jpg")',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)', // 배경의 투명도 조절
                }}
            >
            <div className='flex space-x-10'>
                <div className='border-2 p-10'>
                    야구
                </div>
                <div className='border-2 p-10'>
                    todo
                </div>
            </div>
        </div>
    )
}

export default Main;