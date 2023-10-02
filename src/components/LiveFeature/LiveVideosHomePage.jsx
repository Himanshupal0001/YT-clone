
import React from 'react'
import { useSelector } from 'react-redux';
import LiveVideoContainer from './LiveVideoContainer';


function LiveVideosHomePage() {
    const { isMenuOpen } = useSelector(store => store.menu);
    return !isMenuOpen ? (
        <div className='w-[calc(100vw-5vw)] px-8 pb-6 mt-16'>
            <LiveVideoContainer />
        </div>
    )
        : (
            <div className='w-[calc(100vw-15vw)] pb-6 px-8 ml-8  mt-16'>
                <LiveVideoContainer />
            </div>
        )
}

export default LiveVideosHomePage
