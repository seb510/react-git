import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {

    let postsElement =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();
    let addPost = () => {
        let text= newPostElement.current.value;
        alert(text)
    }
    return (
    <div className={classes.posts}>
      <h3>MY POST</h3>
      <div>
          <div>
              <textarea ref={newPostElement}></textarea>
          </div>
          <div>
              <button onClick={addPost} type="submit">Add post</button>
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