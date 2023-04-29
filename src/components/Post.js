import React, { useContext } from "react";
import { useState } from "react";
import PostDetails from "./PostDetails";
import { useEffect } from "react";
import { PostContext } from "./PostContext";

const Post = (props) => {

    const { setSelectedPostId } = useContext(PostContext);

    const handlePostClick = (postId) => {
        setSelectedPostId(postId);
    };
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
    function handleBackClick() {
        setSelctedPost(null);
    }

    return (
        <div className="post" id={props.id} onClick={() => {
            onClick()
            handleClick()
            handlePostClick(props.id)
        }}>
            <h2></h2>
            <h1>Title:{props.title}</h1>
            <h2></h2>
            <h3>Author:{props.author}</h3>
            {
                selectedPost && <PostDetails post={props.post} backClick={handleBackClick} />
            }
        </div>
    )
}

export default Post;