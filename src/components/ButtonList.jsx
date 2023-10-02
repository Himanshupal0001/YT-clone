import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

function ButtonList() {
    const [width, setWidth] = useState(0);
    const [leftmostWidth, setLeftmostWidth] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0);
    const { isMenuOpen } = useSelector(store => store.menu)
    const buttonList = ['All', 'Music', 'Sports', 'Gaming', 'Editing', 'Live', 'Gadgets', 'Computers', 'Comedy', 'AI', 'Webdev', 'Streetfood', 'HTML', 'CSS', 'All', 'Music', 'Sports', 'Gaming', 'Editing', 'Streetfood', 'HTML', 'CSS', 'All', 'Music'];

    const navigate = useNavigate();

    useEffect(() => {
        const CLIENT_WIDTH = document.getElementById('btn-crousal');
        setWidth(CLIENT_WIDTH.clientWidth);
    }, [width, leftmostWidth]);
    //console.log('visible width', width);
    //console.log('leftmost width', leftmostWidth);
    const containerRef = useRef(null);

    const prevBtn = () => {
        const leftScroll = containerRef.current.scrollLeft -= 400;
        setLeftmostWidth(leftScroll);

    }

    const nextBtn = () => {
        const leftScroll = containerRef.current.scrollLeft += 400;
        setLeftmostWidth(leftScroll);
    }

    const handleClick = (query, index) => {

        if (query !== '') {
            //console.log(query);
            setActiveIndex(index);
            //console.log(active)
            //console.log(index)
            navigate('/results?search_query=' + query);

        }

    }




    return !isMenuOpen ? (
        <div className=' tags ml-8 py-2 w-[calc(100vw-9vw)] flex gap-x-4  overflow-hidden items-center fixed  bg-white cursor-pointer ' id='btn-crousal' ref={containerRef}>
            {
                leftmostWidth === 0 ? null :
                    (
                        <div className='sticky bg-white left-0' onClick={prevBtn}>
                            <div className='sticky h-[40px] w-[40px] top-0 left-0  flex items-center justify-center  hover:bg-gray-200  rounded-full'>
                                <BiChevronLeft />
                            </div>
                        </div>
                    )
            }

            {
                buttonList.map((item, index) => <span key={index} className={activeIndex === index ? 'bg-black text-white py-1 px-2 rounded-lg' : 'bg-gray-200 py-1 px-2 rounded-lg text-md'} onClick={() => handleClick(item, index)}>{item}</span>)
            }


            <div className='sticky bg-white right-0 top-0'>
                <div className='sticky h-[40px] w-[40px] top-0 right-0 flex items-center justify-center hover:bg-gray-200 rounded-full' onClick={nextBtn}>
                    <BiChevronRight />
                </div>
            </div>
        </div>
    )
        :
        (
            <div className=' tags ml-16 py-2 w-[calc(100vw-19vw)] flex gap-x-4  overflow-hidden items-center fixed  bg-white cursor-pointer ' id='btn-crousal' ref={containerRef}>
                {
                    leftmostWidth === 0 ? null :
                        (
                            <div className='sticky bg-white left-0' onClick={prevBtn}>
                                <div className='sticky h-[40px] w-[40px] top-0 left-0  flex items-center justify-center  hover:bg-gray-200  rounded-full'>
                                    <BiChevronLeft />
                                </div>
                            </div>
                        )
                }

                {
                    buttonList.map((item, index) => <span key={index} className={activeIndex === index ? 'bg-black text-white py-1 px-2 rounded-lg' : 'bg-gray-200 py-1 px-2 rounded-lg text-md'} onClick={() => handleClick(item, index)}>{item}</span>)
                }


                <div className='sticky bg-white right-0 top-0'>
                    <div className='sticky h-[40px] w-[40px] top-0 right-0 flex items-center justify-center hover:bg-gray-200 rounded-full' onClick={nextBtn}>
                        <BiChevronRight />
                    </div>
                </div>
            </div>
        )
}

export default ButtonList


/*
<div className=' tags ml-8 py-2 px-8 w-[calc(100vw-9vw)] flex gap-x-4  overflow-auto bg-white fixed  cursor-pointer' id='btn-crousal'>
            <div>
                <BiChevronLeft />
            </div>
            {
                buttonList.map((item, index) => <span key={index} className={'bg-gray-300 py-1 px-2 rounded-lg'}>{item}</span>)
            }
            <div>
                <BiChevronRight />
            </div>
        </div>
*/