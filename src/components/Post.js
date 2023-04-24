import React from "react";
import { useState } from "react";
import PostDetails from "./PostDetails";
import { useEffect } from "react";

const Post = (props) => {

    const onClick = () => {
        console.log(props.id);
    }
    const [selectedPost, setSelctedPost] = useState(null);

    const handlePostSelected = () => {
        setSelctedPost(props.post);
        console.log(selectedPost);
    }

    function handleClick() {
        handlePostSelected();
    }
    function handleBackClick(){
        setSelctedPost(null);
    }
    
    return (
        <div className="post" id={props.id} onClick={() => {
            onClick()
            handleClick()

        }}>
            <h1>{props.title}</h1>
            <h3>{props.author}</h3>
            {
                selectedPost && <PostDetails post={props.post} backClick = {handleBackClick}/>
            }
        </div>
    )
}

export default Post;