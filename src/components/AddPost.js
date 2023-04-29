import axios from "axios";
import { useRef, useState } from "react";

const AddPost = () => {

    const [post, setPost] = useState({
        title: '',
        content: '',
        author: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/v1/api/books/", post)
            .then(res => {
                setPost({
                    title: '',
                    content: '',
                    author: ''
                })
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div>
            Add New Post
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={post.title} onChange={handleInputChange} />
                <input type="text" name="author" value={post.author} onChange={handleInputChange} />
                <textarea name="content" value={post.content} onChange={handleInputChange} />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
}

export default AddPost;