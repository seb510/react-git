import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
    <div className={classes.posts}>
      <h3>My post</h3>
      <div>
          <div>
              <textarea name="text" id="" cols="20" rows="5"></textarea>
          </div>
          <div>
              <button type="submit">Add</button>
          </div>
      </div>
      <div className={classes.postsDialog}>
        <Post message='Hi! how are you?' count='20'/>
        <Post message='Hi! It is my first post' count='10'/>
      </div>
    </div>
    );
};

export default MyPosts;