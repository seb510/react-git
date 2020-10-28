import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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