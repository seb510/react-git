import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
    <div>
      My post
      <div>
        <textarea name="text" id="" cols="20" rows="5"></textarea>
        <button type="submit">Add</button>
      </div>
      <div className={classes.posts}>
        <Post/>
        <Post/>
      </div>
    </div>
    );
};

export default MyPosts;