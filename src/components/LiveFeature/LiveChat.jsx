import React, { useEffect, useRef, useState } from 'react'
import ChatMsg from './ChatMsg'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../../redux/liveChatSlice';
import { generateName, generateRandomMsg } from '../../Utils/helper';
import { VscSend } from 'react-icons/vsc'
function LiveChat() {
    const [liveChat, setLiveChat] = useState('');
    const { messages } = useSelector(store => store.chat)
    const currentMsg = useRef(null)
    const dispatch = useDispatch();
    useEffect(() => {
        const i = setInterval(() => {
            //console.log('Api polling');
            //console.log(messages.length)
            dispatch(addMessage({
                name: generateName(),
                message: generateRandomMsg(),
            }))
        }, 5000);

        return () => {
            clearInterval(i)
        }
    }, [])
    //autoscroll functionality to always stay bottom of the div
    // useEffect(() => {
    //     if (currentMsg.current) {
    //         currentMsg.current.scrollTop = currentMsg.current.scrollHeight;
    //     }
    // }, [messages])

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addMessage({
            name: 'Himanshu Pal',
            message: liveChat,
        }))
        setLiveChat('');
    }

    return (
        <div className='h-[73vh] border-solid border-gray-200  border-2 w-full mb-2 rounded-lg overflow-hidden'>
            <div className='h-[5vh] sticky top-0 mb-2 border-b py-1 px-4'>
                <span className='font-medium'>Live chat</span>
            </div>
            <div className='overflow-y-auto h-[60vh] pb-3 px-4' ref={currentMsg}>
                {
                    messages?.map((msg, index) => (
                        <ChatMsg name={msg?.name} message={msg?.message} key={index} />
                    ))
                }
            </div>
            <form onSubmit={e => handleSubmit(e)}>
                <div className=' sticky bottom-0 h-[7vh] flex justify-between px-2 items-center gap-x-2 border-t-2'>
                    <span className='w-full'>
                        <input type='text' className='w-full border-b outline-none' placeholder='Chat...' value={liveChat} onChange={e => setLiveChat(e.target.value)} />
                    </span>
                    <span className=' hover:bg-green-100 p-2 rounded-full' onClick={handleSubmit}><VscSend size='1.2em' /></span>
                </div>
            </form>
        </div>
    )
}

export default LiveChat
