import React from 'react';

const Post = (props) => {
    const deletePost = ({post}) => {
        console.log(props.post.id)
        props.splice(1);
    };

    return (
        <div className="post">
            <div className="post__container">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.description}
                </div>
            </div>
            <div className="post__btns">
                <button onClick={deletePost}>Видалити</button>
            </div>
        </div>
    )
}

export default Post;