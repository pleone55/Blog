import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
    const [posts, setPosts] = useState({});

    const getPosts = async() => {
        const res = await axios.get("http://localhost:7002/posts");
        console.log(res.data)
        setPosts(res.data);
    }

    useEffect(() => {
        getPosts();
    }, []);

    const reneredPosts = Object.values(posts).map(post => {
        return <div key={post.id} style={{width: "30%", display:"inline-block", marginBottom:"60px"}}>
            <div>
                <h3>{post.title}</h3>
                <CommentList comments={post.comments} />
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
