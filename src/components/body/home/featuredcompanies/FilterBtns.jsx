import React, { useState } from 'react'

const FilterBtns = ({ setFilter }) => {
    const [toggle, setToggle] = useState(1);

    function updateToggle(id) {
        setToggle(id);
        setFilter(id);
    };

    const btns = [
        { tab: 1, name: "All" },
        { tab: 2, name: "IT Services" },
        { tab: 3, name: "BFSI" },
    ];

    return (
        <div className='flex items-center justify-center mt-5'>
            <div className='flex flex-wrap justify-center max-h-[42px] overflow-hidden'>
                {
                    btns.map((data) => {
                        return (
                            <span
                                key={data.tab}
                                onClick={() => updateToggle(data.tab)}
                                className={`inline-block border rounded-full border-[#9ea5c6] font-bold text-sm py-[6px] px-3 mr-[8px] mb-3 cursor-pointer hover:bg-[#e7e7f1] ${toggle === data.tab ? 'bg-[#e7e7f1]' : ''}`}
                            >
                                {data.name}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FilterBtns;
