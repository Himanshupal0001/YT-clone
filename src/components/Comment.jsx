import React, { useEffect, useState } from 'react'
import { BiLike, BiDislike, BiCaretDown, BiCaretUp } from 'react-icons/bi'




function Comment({ data }) {
    const [showReplies, setShowReplies] = useState(false);

    //console.log(showReplies)
    const { id, snippet, replies } = data
    return (
        <div key={id} className='flex gap-x-4 mb-2 w-full'>
            <div className='w-[5%]'>
                <img src={snippet?.topLevelComment?.snippet?.authorProfileImageUrl ?? snippet?.authorProfileImageUrl} alt='profile picture' className='rounded-full object-fill' />
            </div>
            <div className='w-[95%]'>
                <div >
                    <span className='font-semibold text-xs'>@{snippet?.topLevelComment?.snippet?.authorDisplayName ?? snippet?.authorDisplayName}</span>
                    <span className='ml-2 text-xs'>{snippet?.topLevelComment?.snippet?.publishedAt ?? snippet?.publishedAt}</span>
                </div>
                <div className='text-sm'>{snippet?.topLevelComment?.snippet?.textOriginal ?? snippet?.textOriginal}</div>
                <div className='flex gap-x-1 items-center'>
                    <BiLike size='1.8em' className='hover:bg-gray-200 rounded-full p-1' />
                    {/**may error occur */}
                    <span className='text-xs'>{snippet?.topLevelComment?.snippet?.likeCount > 0 ?? snippet?.likeCount > 0 ? snippet?.topLevelComment?.snippet?.likeCount ?? snippet?.likeCount : null}</span>

                    <BiDislike size='1.8em' className='hover:bg-gray-200 rounded-full p-1' />
                    <span className='text-xs hover:bg-gray-200 px-3 py-1.5 rounded-2xl cursor-pointer font-semibold'>Reply</span>
                </div>

                <div className='text-sm flex items-center gap-x-3 hover:bg-blue-100 w-fit px-2.5 py-1.5 rounded-full font-medium cursor-pointer' onClick={() => setShowReplies(!showReplies)}>
                    {
                        replies?.comments?.length > 0 &&
                        (
                            <>
                                {
                                    showReplies ? <BiCaretUp className='text-blue-500' /> : <BiCaretDown className='text-blue-500' />
                                }

                                <div>
                                    <span className='mr-1 text-blue-500'>{replies?.comments?.length}</span><span className='text-blue-500'>{replies?.comments?.length === 1 ? 'reply' : 'replies'}</span>
                                </div>
                            </>
                        )
                    }
                </div>
                {
                    showReplies && (
                        <div className=''>
                            {
                                replies?.comments?.map(reply => (
                                    <Comment key={reply.id} data={reply} />
                                ))

                            }

                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Comment
