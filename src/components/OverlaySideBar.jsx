import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/menuSlice';
import SideBar from './SideBar';

import { BURGER_MENU, LOGO_URL } from '../Utils/constants';

function OverlaySideBar() {
    const dispatch = useDispatch();
    const toggleSideBar = () => {
        dispatch(toggleMenu())
    }
    return (
        <div className='bg-gray-500/50 h-full w-full z-10 fixed top-0 cursor-pointer overflow-y-scroll overscroll-y-none' onClick={() => toggleSideBar()}>
            <div className='h-full w-1/2 md:w-[16vw] bg-white z-999 relative  top-0'>
                <div className='flex md:ml-8 items-center h-[7vh] w-1/2 gap-x-4'>
                    <img src={BURGER_MENU} alt='menu' className='h-6 bg-orange-400' onClick={() => toggleSideBar()} />
                    <img src={LOGO_URL} alt='logo' className='h-5' />
                </div>
                <div className='ml-4'>
                    <SideBar />
                </div>
            </div>
        </div>

    )
}

export default OverlaySideBar
