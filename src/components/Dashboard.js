import React, { useEffect, useState } from "react";
import Posts from "./Posts";
import NavBar from "./NavBar";
import axios from "axios";
import PostDetails from "./PostDetails";
import AddPost from "./AddPost";
import AddPostWithRef from "./AddPostWithRef";


const Dashboard = () => {

    const [selectedPost, setSelectedPost] = useState(null);
    const [title, setTitle] = useState("");

    const handleInput = (event) => {
        setTitle(event.target.value);
    }
    const titleSetter = (index) => {
        const newPost = { ...posts[index], title: title };
        const updatedPost = [
            ...posts.slice(0, index),
            newPost,
            ...posts.slice(index + 1)
        ]

        setPost(updatedPost);
        console.log(updatedPost);
    }

    const [posts, setPost] = useState(
        [
            { id: 111, title: "Happines", author: "John", publishNumber: 23 },
            { id: 112, title: "Miu", author: "Dean", publishNumber: 342 },
            { id: 113, title: "Enjoy Life", author: "Jasmine", publishNumber: 3243 }
        ]
    );
    function handlePostDeleted() {
        // refetch the data from the server and update the state
        axios.get("http://localhost:8080/v1/api/books")
            .then(response => setPost(response.data))
            .catch(error => console.log(error));
    }

    function handleDeletePost(postId) {
        setPost(posts.filter(post => post.id !== postId));
    }


    useEffect(() => {
        axios.get("http://localhost:8080/v1/api/books/")
            .then(data => {
                setPost(data.data);
                console.log(data.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [Posts])


    return (
        <div >
            <NavBar />

            {/* <Posts
                posts={posts}

            />
            <PostDetails onPostDeleted={handlePostDeleted} handleDelete={handleDeletePost} /> */}
            <Posts
                posts={posts}
                // onPostClick={handlePostClick}
                onDeleteClick={handleDeletePost}
            />

            {selectedPost && (
                <PostDetails
                    post={posts.find(post => post.id === selectedPost)}
                    onPostDeleted={handlePostDeleted}
                    handleDelete={handleDeletePost}
                />
            )}
            {/* <PostDetails handleDelete={handleDeletePost}/> */}
            <input type="text" value={title} onChange={handleInput} />
            <button onClick={() => { titleSetter(0) }}>change title</button>

            <div>
               <AddPost />
            </div>

            <div>
                With useRef
                <AddPostWithRef />
            </div>
        </div>);
}

export default Dashboard;