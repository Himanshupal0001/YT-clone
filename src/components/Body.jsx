import React, { useEffect } from 'react'
import SideBar from './SideBar.jsx'
import MainContainer from './MainContainer.jsx'
import ButtonList from './ButtonList.jsx'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../redux/menuSlice.js'
function Body() {
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(toggleMenu());
    // }, [toggleMenu])
    return (
        <div className='flex gap-x-4'>
            <div className='left'>
                <SideBar />
            </div>
            <div className='right'>
                <ButtonList />
                <MainContainer />
            </div>
        </div>
    )
}

export default Body
