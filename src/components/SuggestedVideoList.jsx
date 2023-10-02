import React from 'react'
import SuggestedVideoCard from './SuggestedVideoCard'
import { Link } from 'react-router-dom'
function SuggestedVideoList({ suggestions }) {
    return (
        <div>
            <p className='my-4 font-medium'>More videos</p>
            <div>
                {suggestions?.map(video =>
                    <Link to={'/watch?v=' + video?.id?.videoId} key={video?.id?.videoId || Math.floor(Math.random() * 10 ** 8)}>
                        <SuggestedVideoCard video={video} />
                    </Link>
                )}
            </div>
        </div>
    )
}

export default SuggestedVideoList
