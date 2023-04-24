const PostDetails = ({post,backClick}) => {
    return (

        <div>
            <h3>
                {post.id}
                {post.publishNumber}
            </h3>

                <button>edit</button>
                <button>delete</button>
                <button onClick={backClick}>back</button>

        </div>
    );
}

export default PostDetails;