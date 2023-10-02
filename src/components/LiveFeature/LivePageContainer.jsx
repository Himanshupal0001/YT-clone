import React, { Suspense, lazy } from 'react'
import SideBar from '../SideBar'
import ButtonList from '../ButtonList'
import Loader from '../../Utils/Loader'

const LiveVideosHomePage = lazy(() => import('./LiveVideosHomePage'))
function LivePageContainer() {
    return (
        <div className='flex gap-x-4'>
            <div className='left'>
                <SideBar />
            </div>
            <div className='right'>
                <ButtonList />
                <Suspense fallback={<Loader />}>
                    <LiveVideosHomePage />
                </Suspense>
            </div>
        </div>
    )
}

export default LivePageContainer
