import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const posts = require('../data/MyModels').myPosts;
const postComments = require('../data/MyModels').postComments;

export default function Create() {

    const [titleInput, setTitleInput] = useState("");
    const [contentInput, setContentInput] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const addItem = (e) => {
        e.preventDefault();
        if(titleInput.length === 0 || contentInput.length === 0)
        {
            setError(true);
            return;
        }else setError(false);

        const initData = {
            id: posts.length,
            title: titleInput,
            content: contentInput
        }
        posts.push(initData)
        postComments.push({
            id: postComments.length,
            content: []
        })

        navigate('/', {replace:true});
    }

    return (
        <div class='mt-4'>
        <h3>Create new Post</h3>
        <form onSubmit={addItem}>
            <div class='form-group'>
                <label for='title'>Title</label>
                <input
                    type='text'
                    class='form-control'
                    id='title'
                    aria-describedby='emailHelp'
                    value={titleInput}
                    onChange={(e) =>
                        {
                            setTitleInput(e.target.value)
                        }
                    }
                    placeholder='Enter title '
                    name='title'
                />
            </div>
            <div class='form-group'>
                <label for='content'>Content</label>
                <textarea
                    type='text'
                    class='form-control'
                    id='content'
                    aria-describedby='emailHelp'
                    value={contentInput}
                    onChange={(e) =>
                        {
                            setContentInput(e.target.value)
                        }
                    }
                    placeholder='Enter content'
                    name='content'
                ></textarea>
            {error ? <span style={{color: "red"}}>No content.</span> : null}
            </div>
            <button type='submit' class='btn btn-primary'>Post</button>
        </form>
        </div>
    )
}