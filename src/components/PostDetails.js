import axios from "axios";

const PostDetails = ({ post,  backClick,},{handleDelete, onPostDeleted }) => {



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

        </div>
    );
}

export default PostDetails;