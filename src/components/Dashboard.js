import React, { useState } from "react";
import Posts from "./Posts";
import NavBar from "./NavBar";


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
    return (
        <div >
            <NavBar />
            <Posts
                posts={posts}
            />
            <input type="text" value={title} onChange={handleInput} />
            <button onClick={() => { titleSetter(0) }}>change title</button>
        </div>);
}

export default Dashboard;