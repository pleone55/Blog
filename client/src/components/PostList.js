import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const getPosts = async() => {
        const res = await axios.get("http://localhost:7000/posts");
        setPosts(res.data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const reneredPosts = Object.values(posts).map(post => {
        return <div key={post.id} style={{width: "30%", display:"inline-block", marginBottom:"60px"}}>
            <div>
                <h3>{post.title}</h3>
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id}/>
            </div>
        </div>
    })

    return (
        <div>
            {reneredPosts}
        </div>
    )
}

export default PostList;
