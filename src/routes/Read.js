import React, { useState } from "react";
import { useParams } from "react-router-dom";
const posts = require('../data/MyModels').myPosts;
const comments = require('../data/MyModels').postComments;

function Detail(){
    const { id } = useParams();
    const post = posts.find((val, index) => {
        return val.id === Number(id)
    }); 
    const comment = comments.find((val, index) => {
        return val.id === Number(id) 
    });

    const [registryData, setRegistryData] = useState([...comment.content])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false);

    const addItem = (e) => {
        e.preventDefault();
        if(textInput.length===0)
        {
            setError(true);
            return;
        }
        else setError(false);

        const initData = {
            id: comment.content.length,
            context: textInput
        }
        comment.content.push(initData);

        const tempData = [...registryData];
        tempData.push(initData);
        setRegistryData(tempData);
        setTextInput("");
    }

    return (
        <div class='mt-4'>
            <div class='row'>

                <div class='col-sm-0 col-lg-3'>
                    <h3>Comments</h3>
                    {comment ?
                        <ul>
                            {registryData.map(val => {
                                return (
                                    <li>{val.context}</li>
                                );
                            })}
                        </ul>
                        : null}
                    <form
                        class='mt-4'
                        method='post'
                        onSubmit={addItem}
                        >
                        <div class='form-group'>
                            <label for='context'>Content</label>
                            <textarea
                                class='form-control'
                                placeholder='Enter content'
                                name='context'
                                value={textInput}
                                onChange={(e) =>
                                    {
                                        setTextInput(e.target.value)
                                    }
                                }
                                ></textarea>
                            {error ? <span style={{color: "red"}}>No content.</span> : null}
                        </div>
                        <button type='submit' value="Submit" class='btn btn-primary'>Comment</button>
                    </form>
                </div>
                <div class='col-sm-12 col-lg-9'>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>

                </div>
            </div>
        </div>
    )
}

export default Detail;