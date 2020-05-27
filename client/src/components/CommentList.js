import React from 'react';

const CommentList = ({ comments }) => {
    const renderComments = comments.map(comment => {
        let content = '';
        if(comment.status === 'approved'){
            content = comment.content;
        } else if(comment.status === 'pending') {
            content = 'This comment is awaiting moderation';
        } else if(comment.status === 'rejected') {
            content = 'This comment has been rejected';
        }

        return <ul key={comment.id}>
            <li>{content}</li>
        </ul>
    });

    return (
        <div>
            {renderComments}
        </div>
    )
}

export default CommentList;
