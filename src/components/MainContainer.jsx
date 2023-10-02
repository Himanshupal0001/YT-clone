import React from 'react'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

function MainContainer() {
    const { isMenuOpen } = useSelector(store => store.menu)
    return !isMenuOpen ? (
        <div className='w-[calc(100vw-5vw)] px-8 pb-6 mt-16'>
            <VideoContainer />
        </div>
    )
        : (
            <div className='w-[calc(100vw-15vw)] pb-6 px-8 ml-8  mt-16'>
                <VideoContainer />
            </div>
        )
}

export default MainContainer
