import React from 'react'
import { USER_ICON } from '../../Utils/constants'

function ChatMsg({ name, message }) {
    return (
        <div className='flex gap-x-2 mb-2 w-full'>
            <div className='w-[10%]'>
                <img src={USER_ICON} className='h-6 w-6' />
            </div>
            <div className='w-[90%]'>
                <span className='mr-2 font-medium text-gray-550 text-sm'>{name}</span>
                <span className='text-sm'>{message}</span>
            </div>
        </div>
    )
}

export default ChatMsg
