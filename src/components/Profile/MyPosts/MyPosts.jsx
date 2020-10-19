import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let  posts = [
        {id: 1, message: 'Hi! how are you?', likesCount: 12},
        {id: 2, message: 'Hi! It is my first post', likesCount: 15},
        {id: 3, message: 'Maybe we can to play with us', likesCount: 15},
    ];

    let postsElement = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
          {postsElement}
        {/*<Post message={postData[0].message} likesCount={postData[0].likesCount}/ -старая запись>*/}
      </div>
    </div>
    );
};

export default MyPosts;