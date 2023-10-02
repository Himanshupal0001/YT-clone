import React, { useEffect, useState } from 'react'
import { YOUTUBE_CHANNEL_API } from '../Utils/constants'
import { BiLike, BiDislike } from 'react-icons/bi'
//import {PiBellLight} from 'react-icons/pi'
import { PiShareFatLight, PiDotsThreeBold, PiBellLight } from 'react-icons/pi'
import { TfiDownload } from 'react-icons/tfi'
import { HiChevronDown } from 'react-icons/hi2'

function VideoMetaData({ channelId, likeCount }) {
    const [channel, setChannel] = useState({});
    const [subscribed, setSubscribed] = useState(false);
    //console.log(channelId)
    useEffect(() => {
        getChannelDetails(channelId);
    }, [channelId]);

    const getChannelDetails = async (channelId) => {
        try {
            if (channelId !== undefined) {
                const data = await fetch(YOUTUBE_CHANNEL_API + '&id=' + channelId);
                const json = await data.json();
                //setChannel(json.items)
                const channelDetails = json.items?.find(cid => cid?.id === channelId);
                //console.log(channelDetails)
                if (channelDetails) {
                    setChannel(channelDetails)
                }
                else {
                    throw new Error('channl details not found')
                }
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const { snippet, statistics } = channel;

    return (
        <div className='md:grid gap-y-2'>
            <div className='md:flex'>
                <div className='md:w-1/2 flex items-center gap-x-4'>
                    <div className='w-10 h-10 rounded-full overflow-hidden '>
                        <img src={snippet?.thumbnails?.medium.url} alt='channel img' />
                    </div>
                    <div className=''>
                        <div className='font-medium'>{snippet?.title}</div>
                        <div className='text-xs'>{Intl.NumberFormat('en', { notation: 'compact' }).format(statistics?.subscriberCount)} subscribers</div>
                    </div>
                    {
                        subscribed ? (
                            <div className='bg-gray-100 hover:bg-gray-200 px-4 py-[.4rem] cursor-pointer rounded-full flex gap-x-2 items-center' onClick={() => setSubscribed(false)} >
                                <PiBellLight size='1.2em' /> Subscribed <HiChevronDown />
                            </div>
                        ) :
                            (
                                <div className='bg-black px-4 py-[.4rem] rounded-full text-white cursor-pointer text-sm' onClick={() => setSubscribed(true)}>Subscribe</div>
                            )
                    }

                </div>
                <div className='w-1/2 flex justify-between'>
                    <div className='flex'>
                        <span className='flex items-center gap-x-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-l-full cursor-pointer font-medium text-sm'><BiLike size='1.2em' />{Intl.NumberFormat('en', { notation: 'compact' }).format(Number(likeCount))}</span>
                        <span className='bg-gray-100 w-[.1rem] h-full flex items-center'>
                            <span className='bg-gray-300 h-[60%] w-1/12'></span>
                        </span>
                        <span className='flex items-center px-4 bg-gray-100 hover:bg-gray-200 rounded-r-full cursor-pointer'><BiDislike size='1.2em' /></span>
                    </div>

                    <div className='flex items-center gap-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 font-semibold cursor-pointer text-sm'><PiShareFatLight size='1.2em' />Share</div>
                    <div className='flex items-center gap-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 font-semibold cursor-pointer text-sm'><TfiDownload />Download</div>
                    <div className='bg-gray-100 hover:bg-gray-200 rounded-full p-3 cursor-pointer'><PiDotsThreeBold /></div>
                </div>
            </div>
        </div>
    )
}

export default VideoMetaData;


/*

<div className='grid gap-y-2'>
                            <div className='font-medium text-xl'>{snippet?.title?.length > 80 ? snippet?.title?.substring(0, 80) + '...' : snippet?.title}</div>
                            <div className='flex'>
                                <div className='w-1/2 flex items-center gap-x-4'>
                                    <div className='w-10 h-10 rounded-full bg-gray-200'></div>
                                    <div>
                                        <div className='font-medium'>{snippet?.channelTitle}</div>
                                        <div className='text-xs'>4.37K subscribers</div>
                                    </div>
                                    {
                                        subscribed ? (
                                            <div className='bg-gray-100 hover:bg-gray-200 px-4 py-[.4rem] cursor-pointer rounded-full flex gap-x-2 items-center' onClick={() => setSubscribed(false)} >
                                                <PiBellLight size='1.2em' /> Subscribed <HiChevronDown />
                                            </div>
                                        ) :
                                            (
                                                <div className='bg-black px-4 py-[.4rem] rounded-full text-white cursor-pointer text-sm' onClick={() => setSubscribed(true)}>Subscribe</div>
                                            )
                                    }

                                </div>
                                <div className='w-1/2 flex justify-between'>
                                    <div className='flex'>
                                        <span className='flex items-center gap-x-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-l-full cursor-pointer font-medium text-sm'><BiLike size='1.2em' />2.4k</span>
                                        <span className='bg-gray-100 w-[.1rem] h-full flex items-center'>
                                            <span className='bg-gray-300 h-[60%] w-1/12'></span>
                                        </span>
                                        <span className='flex items-center px-4 bg-gray-100 hover:bg-gray-200 rounded-r-full cursor-pointer'><BiDislike size='1.2em' /></span>
                                    </div>

                                    <div className='flex items-center gap-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 font-semibold cursor-pointer text-sm'><PiShareFatLight size='1.2em' />Share</div>
                                    <div className='flex items-center gap-x-2 bg-gray-100 hover:bg-gray-200 rounded-full px-4 font-semibold cursor-pointer text-sm'><TfiDownload />Download</div>
                                    <div className='bg-gray-100 hover:bg-gray-200 rounded-full p-3 cursor-pointer'><PiDotsThreeBold /></div>
                                </div>
                            </div>
                        </div>
 */
