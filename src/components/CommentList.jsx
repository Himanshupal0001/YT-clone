import React from 'react'
import Comment from './Comment'
function CommentList({ comments }) {
    return (
        comments?.map(comment => <Comment data={comment} key={comment.id || Math.random()} />)
    )
}

export default CommentList
