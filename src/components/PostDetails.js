import axios from "axios";
import { useContext } from "react";
import { PostContext } from "./PostContext";

const PostDetails = ({ post,  backClick,},{handleDelete, onPostDeleted }) => {


    const { selectedPostId } = useContext(PostContext);

    function handleDeletePost(postId) {
        axios.delete("http://localhost:8080/v1/api/books/" + postId)
            .then(() => {
                // const updatedPosts = posts.filter(post => post.id !== postId);
                // setPost(updatedPosts);
                onPostDeleted();
                console.log("sdlam");
            })
            .catch(error => console.log(error));
    }

    return (

        <div>
            <h3>
                Book Content:
                {post.content}
            </h3>

            <button>edit</button>
            <button onClick={() => handleDeletePost(post.id)}>delete</button>
            <button onClick={backClick}>back</button>
        <h1>selectedPost : {selectedPostId}</h1>
        </div>
    );
}

export default PostDetails;