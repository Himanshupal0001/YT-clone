import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENTS, USER_ICON } from '../Utils/constants';
import { MdOutlineSort } from 'react-icons/md'
import AddComment from './AddComment';
import CommentList from './CommentList';
import Loader from '../Utils/Loader'

function CommentsContainer({ videoId, commentCount }) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextPageToken, setNextPageToken] = useState('');
    // console.log(comments)
    useEffect(() => {
        fetchComments();
    }, []);
    const getComments = async (pageToken = '') => {
        try {
            const data = await fetch(YOUTUBE_COMMENTS + '&videoId=' + videoId + '&pageToken=' + pageToken ?? '');
            const json = await data.json();
            return json;
        }
        catch (err) {
            console.log(err)
        }
    }

    const fetchNextComments = async () => {
        if (nextPageToken) {
            setIsLoading(true)
            const newData = await getComments(nextPageToken);
            if (newData && newData.items) {
                setComments(prev => [...prev, ...newData?.items]);
                setNextPageToken(newData.nextpageToken);
            }
        }
        setIsLoading(false)
    }


    const fetchComments = async () => {
        setIsLoading(true);
        const commentList = await getComments();
        if (commentList && commentList.items) {
            setComments(commentList.items);
            setNextPageToken(commentList?.nextPageToken || '');
        }
        setIsLoading(false);
    }
    //console.log(comments)
    return (
        <div className='mt-6'>
            <div className='flex gap-x-4 mb-6'>
                <span className='text-base'>
                    {Intl.NumberFormat('en', { notation: 'compact' }).format(commentCount)} Comments
                </span>
                <span className='flex items-center gap-x-2'>
                    <MdOutlineSort size='1.6em' />
                    <p className='font-semibold'>Sort by</p>
                </span>
            </div>
            <div>
                <AddComment img={USER_ICON} />
            </div>
            <div className='mt-4'>
                <CommentList comments={comments} />
            </div>
            <div>
                {
                    nextPageToken !== '' ?
                        (<button className='w-full p-1 bg-gray-200 rounded-full text-center font-medium' onClick={() => fetchNextComments()}>Load more</button>)
                        : null

                }
            </div>
            {
                isLoading && <div className='p-8 flex items-center justify-center'><Loader /></div>
            }
        </div>
    )
}

export default CommentsContainer;
