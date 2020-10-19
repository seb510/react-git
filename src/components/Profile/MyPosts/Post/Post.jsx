import React from 'react';
import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <img src="https://lh3.googleusercontent.com/XejZgR3wP1KTrB0824Ah7OMjGMPjyTMSN0zbzw-m4NJ5jvHlwyh5p13AUyrp5qDy26qscAJh8ep8RNF4F2Kqkw=s1500-pp" alt="Avatar"/>
            <span>{props.message}</span>
            <p>
                Like -
            <span>{ props.likesCount }</span>
            </p>
        </div>
    );
};

export default Post;