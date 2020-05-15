import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ postId }) => {
    const [comments, setComments] = useState([]);

    const getComments = async() => {
        const res = await axios.get(`http://localhost:7001/posts/${postId}/comments`);
        setComments(res.data);
    }

    useEffect(() => {
        getComments();
        //eslint-disable-next-line
    }, []);

    const renderComments = comments.map(comment => {
        return <ul key={comment.id}>
            <li>{comment.content}</li>
        </ul>
    });

    return (
        <div>
            {renderComments}
        </div>
    )
}

export default CommentList;
