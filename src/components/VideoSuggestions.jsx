import React, { useEffect, useState, } from 'react'
import { VIDEO_SUGGESTION_API } from '../Utils/constants'
import SuggestedVideoList from './SuggestedVideoList';
import SuggestionVideoShimmer from './Shimmers/SuggestionVideoShimmer'

function VideoSuggestions({ videoTitle, videoId }) {
    const [suggestedVideos, setSuggestedVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState('');
    const [nextPageToken, setNextPageToken] = useState('');

    useEffect(() => {
        fetchVideos()
    }, [videoTitle]);
    const searchVideoByKeyword = async (videoTitle, pageToken = '') => {
        setIsFetchingNextPage(true)
        try {
            if (videoTitle !== undefined) {
                const data = await fetch(VIDEO_SUGGESTION_API + '&q=' + videoTitle + '&pageToken=' + pageToken ?? '');
                if (!data.ok) {
                    throw new Error('Failed to fetch Data');
                }
                const json = await data.json();
                return json;
            }
        }
        catch (err) {
            console.log(err)
        }
        finally {
            setIsFetchingNextPage(false);
        }
    }

    const fetchNextPage = async () => {
        if (nextPageToken) {
            setIsLoading(true)
            const newData = await searchVideoByKeyword(nextPageToken);
            if (newData && newData.items) {
                setSuggestedVideos(prev => [...prev, ...newData.items]);
                setNextPageToken(newData.nextPageToken);
            }
        }
        setIsLoading(false);
    }
    const fetchVideos = async () => {
        setIsLoading(true);
        const videos = await searchVideoByKeyword(videoTitle, nextPageToken);
        if (videos && videos?.items) {
            setSuggestedVideos(videos.items);
            setNextPageToken(videos?.nextPageToken)
        }
        setIsLoading(false);
    }
    return (
        <>
            {
                isLoading ? <SuggestionVideoShimmer /> :
                    (
                        <SuggestedVideoList suggestions={suggestedVideos} />
                    )
            }
            <button className='bg-gray-200 p-1 w-full font-medium rounded-full' onClick={() => fetchNextPage()}>Load more</button>
        </>

    )
}

export default VideoSuggestions
