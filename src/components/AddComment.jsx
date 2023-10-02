import { useState } from "react";
import { CiFaceSmile, CiParking1 } from 'react-icons/ci'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

function AddComment({ img }) {
    const [onFocus, setOnFocus] = useState(false);
    const [emojiOpen, setEmojiOpen] = useState(false);
    const [commentText, setCommentText] = useState('');

    const handleEmojiOpen = () => {
        setEmojiOpen(!emojiOpen);
    }
    const onFocusTrue = () => {
        setOnFocus(true)
    }
    const onFocusFalse = () => {
        setOnFocus(false);
        setCommentText('');
        setEmojiOpen(false);
    }
    const handleEmojiClick = (e) => {
        try {
            const sym = e.native.split('_');
            const emojiArray = [];
            sym.forEach(em => emojiArray.push(em))
            let emoji = String(...emojiArray);
            setCommentText(commentText + emoji)
        }
        catch (err) {
            console.log(err)
        }
    }

    const handleCommentText = (e) => {
        setCommentText(e.target.value)
    }

    const handleSubmit = () => {
        if (commentText.length === 0) return;
        setCommentText('');
        setEmojiOpen(false)
        console.log(commentText);
    }

    return (
        <div className="flex w-full items-start gap-x-2">
            <div className="w-fit">
                <img src={img} alt='user profile' height='50' width='50' />
            </div>
            <div className="w-full">
                <span>
                    <input type='text' placeholder="Add a comment..." className="w-full outline-none border-none focus:border-b-2 focus:border-solid focus:border-black mb-1" value={commentText} onChange={e => handleCommentText(e)} onFocus={onFocusTrue} />
                </span>
                {
                    onFocus &&
                    (
                        <span className="flex items-center justify-between">
                            <div className="relative">
                                <CiFaceSmile size='2em' className="hover:bg-gray-100 p-1 rounded-full" onClick={() => handleEmojiOpen()} />
                                {
                                    emojiOpen && (
                                        <div className="absolute left-4 top-8 z-10">
                                            <Picker data={data} onEmojiSelect={handleEmojiClick} maxFrequentRows={0} />
                                        </div>
                                    )
                                }

                            </div>
                            <div className="flex items-center gap-x-4">
                                <button className="py-1.5 px-3 rounded-full font-semibold hover:bg-gray-200 text-sm" onClick={onFocusFalse}>Cancel</button>
                                {
                                    commentText.length > 0 ?
                                        (
                                            <button className="py-1.5 px-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 text-sm" onClick={handleSubmit}>Comment</button>
                                        )
                                        :
                                        (
                                            <button className="py-1.5 px-3 bg-gray-100 rounded-full font-semibold text-sm" onClick={handleSubmit} disabled>Comment</button>
                                        )
                                }
                            </div>
                        </span>
                    )
                }
            </div>
        </div>
    )
}

export default AddComment;