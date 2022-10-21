import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

const posts = require('../data/MyModels').myPosts;

function Edit(){
    const { id } = useParams();
    const post = posts.find(val => {
        return val.id === Number(id);
    })

    const [titleInput, setTitleInput] = useState(post.title);
    const [contentInput, setContentInput] = useState(post.content);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const editItem = (e) => {
        e.preventDefault();
        if (titleInput.length === 0 || contentInput.length === 0)
        {
            setError(true);
            return;
        }
        else setError(false);
        
        posts.forEach((val, index) => {
            if (val.id === Number(id))
            {
                val.title = titleInput;
                val.content = contentInput;
            }
        })
        navigate('/', {replace:true});
    }

    return (
        <div class='mt-4'>
        <h3>Edit Post</h3>
        <form
            class='mt-4'
            onSubmit={editItem}
        >
            <div class='form-group'>
                <label for='title'>Title</label>
                <input
                    type='text'
                    class='form-control'
                    value={titleInput}
                    onChange={(e) =>
                        {
                            setTitleInput(e.target.value)
                        }
                    }
                    id='title'
                    aria-describedby='emailHelp'
                    placeholder='Enter title'
                    name='title'
                />
            </div>
            <div class='form-group'>
                <label for='content'>Content</label>
                <textarea
                    class='form-control'
                    aria-describedby='emailHelp'
                    placeholder='Enter content'
                    value={contentInput}
                    onChange={(e) =>
                        {
                            setContentInput(e.target.value)
                        }
                    }
                    name='content'
                ></textarea>
            {error ? <span style={{color: "red"}}>No content.</span> : null}
            </div>
            <button type='submit' value ='Submit' class='btn btn-primary'>Edit</button>
        </form>
    </div>
    )
}
export default Edit;