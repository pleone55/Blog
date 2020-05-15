import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();

        await axios.post("http://localhost:7000/posts", {
            title
        });

        setTitle("");
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input 
                        value={title} 
                        className="form-control"
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <button className="btn">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate;
