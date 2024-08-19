import React from 'react'

const NavBtn = ({ prevRef, nextRef }) => {
    return (
        <>
            {/* Custom Navigation Buttons */}
            <div
                ref={prevRef}
                className="absolute top-1/2 left-[-24px] transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
            >
                <svg
                    className={`w-4 h-4 fill-current`}
                    viewBox="0 0 20 20"
                >
                    <path d="M12.707 14.707a1 1 0 010-1.414L8.414 10l4.293-3.293a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414 0z" />
                </svg>
            </div>
            <div
                ref={nextRef}
                className="absolute top-1/2 right-[-24px] transform -translate-y-1/2 z-10 flex items-center justify-center w-10 h-10 border-[1px] bg-white rounded-full cursor-pointer"
            >
                <svg
                    className={`w-4 h-4 fill-current`}
                    viewBox="0 0 20 20"
                >
                    <path d="M7.293 14.707a1 1 0 010-1.414L11.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                </svg>
            </div>
        </>
    )
}

export default NavBtn