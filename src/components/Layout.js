
import React from 'react'
import Head from './Head'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <div>
            <Head />
            <>
                <Outlet />
            </>
        </div>
    )
}

export default Layout
