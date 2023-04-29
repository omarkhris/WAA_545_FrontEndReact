import React from 'react';
import Post from './Post';
import { useState } from 'react';

const Posts = (props) => {
    const [selectedPost, setSelectedPost] = useState(null);

  function handlePostClick(post) {
    setSelectedPost(post);
  }

  
    
    const postsList = props.posts.map(p => {
        return <Post
            key={p.id}
            id={p.id}
            title={p.title}
            author={p.author}
            post={p}
            publishNumber={p.publishNumber}
            handleDelete = {p.handleDeletePost}
        />
    })

    return postsList;
}

export default Posts;