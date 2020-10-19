import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let  postData = [
        {id: 1, message: 'Hi! how are you?', likesCount: 12},
        {id: 2, message: 'Hi! It is my first post', likesCount: 15},
    ];

    return (
    <div className={classes.posts}>
      <h3>MY POST</h3>
      <div>
          <div>
              <textarea name="text"></textarea>
          </div>
          <div>
              <button type="submit">Add post</button>
          </div>
      </div>
      <div className={classes.postsDialog}>
        <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
        <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
      </div>
    </div>
    );
};

export default MyPosts;