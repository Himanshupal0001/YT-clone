import React, { useState, useEffect } from 'react'
import OverlaySideBar from './OverlaySideBar'
import { useSelector, useDispatch } from 'react-redux'
import { closeMenu } from '../redux/menuSlice'
import { useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'
import { YOUTUBE_VIDEO_BY_ID } from '../Utils/constants'
import VideoSuggestions from './VideoSuggestions'
import VideoMetaData from './VideoMetaData'
import moment from 'moment'


function WatchPage() {
    const [videoDetails, setVideoDetails] = useState([]);
    const [more, setMore] = useState(false);
    const { isMenuOpen } = useSelector(store => store.menu);
    const [searchParams] = useSearchParams();
    const { id, snippet, statistics } = videoDetails;
    //console.log(snippet, statistics);
    //console.log(videoDetails)

    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    useEffect(() => {
        dispatch(closeMenu())
    }, []);

    useEffect(() => {
        getVideoDetils();
        //console.log('watch page useEffect calling')
    }, []);
    const getVideoDetils = async () => {
        try {
            const data = await fetch(YOUTUBE_VIDEO_BY_ID + '&id=' + searchParams.get('v'));
            const json = await data.json();
            setVideoDetails(json.items[0])
        }
        catch (err) {
            console.log(err)
        }
    }
    //console.log(videoDetails);
    return (
        <>
            <div>
                {
                    isMenuOpen ? <OverlaySideBar /> : null
                }
            </div>
            <div className='px-2 md:flex gap-x-6 justify-center mt-2 '>
                <div className='md:w-[60vw] '>
                    <div className='grid gap-y-2'>
                        <div className='h-[30vh] md:aspect-video md:h-full'>
                            <iframe
                                height='100%'
                                width='100%'
                                src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=3OMljCj1Qvma503Y"}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen
                                className=' rounded-xl '
                            ></iframe>
                        </div>
                        <div className='font-medium text-xl'>{snippet?.title?.length > 80 ? snippet?.title?.substring(0, 80) + '...' : snippet?.title}</div>
                        <>
                            <VideoMetaData channelId={snippet?.channelId} likeCount={statistics?.likeCount} />
                        </>
                        {
                            more ?
                                (
                                    <div className='md:bg-gray-100 rounded-xl p-2 h-fit'>
                                        <div>
                                            <span className='font-semibod'>{Intl.NumberFormat('en', { notation: 'compact' }).format(statistics?.viewCount) + ' '}views</span>
                                            <span>{' '}</span>
                                            <span className='font-semibold'>{moment(snippet?.publishedAt).fromNow()}</span>
                                        </div>
                                        {snippet?.description}{<span className='font-semibold cursor-pointer hover:bg-gray-300' onClick={() => setMore(!more)}> Show less...</span>}</div>
                                )
                                :
                                (
                                    <div className='bg-gray-100 rounded-xl p-2 h-20'>
                                        <div>
                                            <span className='font-semibold'>{Intl.NumberFormat('en', { notation: 'compact' }).format(statistics?.viewCount) + ' '}views</span>
                                            <span>{' '}</span>
                                            <span className='font-semibold'>{moment(snippet?.publishedAt).fromNow()}</span>
                                        </div>
                                        {snippet?.description?.length > 100 ? snippet?.description.substring(0, 100) + '...' : snippet?.description}{snippet?.description?.length > 100 && <span className='font-semibold cursor-pointer hover:bg-gray-300' onClick={() => setMore(!more)}> more...</span>}</div>
                                )
                        }

                    </div>
                    <div>
                        <CommentsContainer videoId={searchParams?.get('v')} commentCount={statistics?.commentCount} />
                    </div>

                </div>
                <div className='md:w-[25vw]'>
                    <VideoSuggestions videoTitle={snippet?.title} videoId={id} />
                </div>
            </div>
        </>

    )
}

export default WatchPage


/*
<iframe
                            width="100%"
                            height="100%"
                            src={"https://www.youtube.com/embed/" + searchParams.get('v') + "?si=3OMljCj1Qvma503Y"}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className='absolute top-0 left-0 right-0 bottom-0 rounded-xl'
                        ></iframe>
*/


//?autoplay=1&modestbranding=1&rel=0&