import axios from "axios";
import { useRef } from "react";

const AddPostWithRef = () => {

    const titleRef = useRef();
    const authorRef = useRef();
    const contentRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const title = titleRef.current.value;
        const author = authorRef.current.value;
        const content = contentRef.current.value;


        axios.post("http://localhost:8080/v1/api/books/",{title , author, content})
        .then(res=>{
            console.log(res)
        })
        .catch(err=>
            console.log(err))

        // send data to server or update state with the new post
    };
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" ref={titleRef} />

            <label htmlFor="author">Author:</label>
            <input type="text" id="author" name="author" ref={authorRef} />

            <label htmlFor="content">Content:</label>
            <textarea id="content" name="content" ref={contentRef} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default AddPostWithRef;