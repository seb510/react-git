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
        <Post message='Hi! how are you?' count='20'/>
        <Post message='Hi! It is my first post' count='10'/>
      </div>
    </div>
    );
};

export default MyPosts;