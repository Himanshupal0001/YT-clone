import React from 'react'
import SuggestedVideoMetaData from './SuggestedVideoMetaData';

function SuggestedVideoCard({ video }) {
    const { id: { videoId },
        snippet: {
            channelTitle,
            thumbnails: { high },
            title
        } } = video;
    //console.log(videoId, channelTitle, title, high);
    //console.log(videoId);
    return (

        <div className='mb-2 w-full h-24 flex gap-x-2 overflow-hidden'>
            <div className='w-[50%] h-full'>
                <img src={high.url} alt='video img' className='object-cover h-full w-full rounded-lg' />
            </div>
            <div className='w-[50%]'>
                <div className='font-medium text-sm mb-1'>{title?.length > 40 ? title?.substring(0, 40) + '...' : title}</div>
                <div className='text-xs text-gray-500'>{channelTitle}</div>
                <div>
                    <SuggestedVideoMetaData videoId={videoId} />
                </div>
            </div>
        </div>

    )
}

export default SuggestedVideoCard
