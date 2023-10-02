import React, { useState, useEffect } from 'react'
import { YOUTUBE_VIDEO_BY_ID } from '../Utils/constants';
import moment from 'moment';

function SuggestedVideoMetaData({ videoId }) {
    const [videoStates, setVideoStates] = useState({})
    useEffect(() => {
        getVideoData(videoId);
    }, []);

    const getVideoData = async (videoId) => {
        try {
            if (videoId !== undefined) {
                const data = await fetch(YOUTUBE_VIDEO_BY_ID + '&id=' + videoId);
                const json = await data.json();
                //console.log(json.items[0].statistics)
                setVideoStates(json.items[0])
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const { snippet, statistics } = videoStates
    //console.log(likeCount, viewCount)
    //console.log(videoStates)
    return (
        <div>
            <span className='text-gray-700 text-xs font-normal'>{Intl.NumberFormat('en', { notation: 'compact' }).format(statistics?.viewCount) + ' '} views </span>
            <span className='mx-1'>•</span>
            <span className='text-xs text-gray-700'>{moment(snippet?.publishedAt).fromNow()}</span>
        </div>
    )
}

export default SuggestedVideoMetaData
