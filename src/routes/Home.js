import React, {useState} from "react";
import { Link } from "react-router-dom"

const posts = require('../data/MyModels').myPosts;
const postComments = require('../data/MyModels').postComments;

function Home(){
    const [registryData, setRegistryData] = useState([...posts])

    const removePost = (id) => {
        const tempData = [...registryData];
        for(let i = 0; i < tempData.length; i++){                        
            if (tempData[i].id === id) { 
                tempData.splice(i, 1); 
                posts.splice(i, 1);
                postComments.splice(i, 1);
                break; 
            }
        }
        setRegistryData(tempData);
    }

    return (
        <div>
            <h1>Check my newest posts</h1>
            <div class='mt-4'>
                <div class='row'>

                    {registryData.map(val => {
                        return (
                            <div class='col-sm-6 col-lg-4'>
                                <div class='card card-post-item'>
                                    <img
                                        class='card-img-top'
                                        src='blogImage.jpg'
                                        alt='My post' />
                                    <div class='card-body'>
                                        <p class='card-text'>{val.title}</p>

                                        <Link to={'/posts/detail/' + val.id} class='btn btn-primary'>Read</Link>
                                        <Link to={'/posts/edit/' + val.id} class='btn btn-success'>Edit</Link>

                                        <button
                                            class='btn btn-danger'
                                            type='submit' 
                                            value="Submit"
                                            onClick={() => {
                                                removePost(val.id)
                                            }}
                                        >Remove</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default Home;