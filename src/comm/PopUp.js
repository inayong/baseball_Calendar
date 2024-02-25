import React, { useEffect } from 'react';

// const PopUp = ({ visible, closable, maskClosable, onClose }) => {
const PopUp = ({ closable, onClose }) => {
    //외부 클릭
    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose(e)
        }
    }

    // 이전 방문 날짜
    const VISITED_BEFORE_DATE = localStorage.getItem('VisitCookie')
    // 현재 날짜
    const VISITED_NOW_DATE = Math.floor(new Date().getDate())

    // console.log("before", VISITED_BEFORE_DATE)
    // console.log("now", VISITED_NOW_DATE)

    useEffect(() => {
        // 하루 닫기 체크
        if (VISITED_BEFORE_DATE !== null) {
            //노출
            if (VISITED_BEFORE_DATE === VISITED_NOW_DATE) {
                localStorage.removeItem('VisitCookie')
                onClose(true)
            }
            //비노출
            if (VISITED_BEFORE_DATE !== VISITED_NOW_DATE) {
                onClose(false)
            }
        }
    }, [VISITED_BEFORE_DATE])

    //하루동안 팝업 닫기
    const dayClose = (e) => {
        if (onClose) {
            onClose(e)

            const expiry = new Date()
            // +1 계산
            const expiryDate = expiry.getDate() + 1
            localStorage.setItem('VisitCookie', expiryDate)
        }
    }

    const close = (e) => {
        if (onClose) {
            onClose(e)
        }
    }

    return (
        <div className='fixed inset-0 flex justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center bg-white w-2/3 md:w-1/2'>
                <div className='py-10 px-7 bg-slate-100 w-full font-TheJamsil5Bold md:text-xl lg:text-2xl'>아직 <span className='text-red-500'>개발 중</span>인 페이지로, <span className='xl:hidden'><br/></span>제대로 동작하지 않을 수 있습니다.</div>
                {closable && (
                    <div className='py-3 bg-slate-900 w-full flex'>
                        <button onClick={dayClose} className='w-1/2 border-r font-NanumSquareNeo text-sm md:text-base text-white'>오늘 하루 닫기</button>
                        <button onClick={close} className='w-1/2 border-l font-NanumSquareNeo text-sm md:text-base text-white'>닫기</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default PopUp;