import React, { useEffect, useRef, useState } from 'react';
import { YOUTUBE_API } from "../../Utils/constants";
import VideoCard from '../VideoCard.jsx';
import { Link } from 'react-router-dom';
import useInterSectionObserver from '../../hooks/useInterSectionObserver.js';
import VideoCardShimmer from '../Shimmers/VideoCardShimmer';
function LiveVideoContainer() {

    const [videos, setVideos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);
    const [nextPageToken, setNextPageToken] = useState('');

    const lastElementRef = useRef();
    const isVisible = useInterSectionObserver(lastElementRef, { threshold: 0.5 })

    useEffect(() => {
        fetchData();
    }, []);

    const fetchVideos = async (pageToken = '') => {
        setIsFetchingNextPage(true);
        try {
            const data = await fetch(YOUTUBE_API + '&pageToken=' + pageToken ?? '');
            if (!data.ok) {
                throw new Error('failed to fetch the data');
            }
            const json = await data.json();
            //console.log(json.items)
            return json
            //setVideos(json.items)
        }
        catch (err) {
            console.log(err);
        }
        finally {
            setIsFetchingNextPage(false);
        }
    }



    const fetchNextPage = async () => {
        if (isVisible && nextPageToken) {
            const newData = await fetchVideos(nextPageToken);
            if (newData && newData.items) {
                setVideos(prev => [...prev, ...newData?.items]);
                setNextPageToken(newData.nextPageToken)
            }
        }
    };

    const fetchData = async () => {
        setIsLoading(true);
        const videoList = await fetchVideos();
        //console.log(videoList)
        if (videoList && videoList.items) {
            setVideos(videoList?.items);
            setNextPageToken(videoList.nextPageToken);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        fetchNextPage();
    }, [isVisible]);

    return (
        <>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(310px,_1fr))] max-xl:grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-[2rem_1rem] '>
                {
                    videos?.map((video, index) => {
                        if (index === videos?.length - 1) {
                            return (
                                <Link to={'/watchlive?v=' + video.id} key={video.id} ref={lastElementRef}>
                                    <VideoCard data={video} channelId={video?.snippet?.channelId} />
                                </Link>
                            )
                        }
                        else {
                            return (
                                <Link to={'/watchlive?v=' + video.id} key={video.id} ref={lastElementRef}>
                                    <VideoCard data={video} channelId={video?.snippet?.channelId} />
                                </Link>
                            )
                        }
                    })}
            </div>
            {
                isFetchingNextPage && <VideoCardShimmer />
            }
        </>
    )
}

export default LiveVideoContainer




/*
   const newItems = newData?.items?.filter(item => !loadedItems?.current?.includes(item?.id));
                //giving next 50 vidoes => newItems
                const loadcur = loadedItems.current = [...loadedItems.current, ...newItems?.map(item => item.id)]
                //console.log(loadcur); //printing id
                const curpage = currentPage.current++;
                //console.log(curpage);
*/
