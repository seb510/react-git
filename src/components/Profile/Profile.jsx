import React from 'react';
import Avatar from './Avatar/Avatar';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
    return (
      <div className={classes.content}>
        <div>
          <img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg' className={classes.back}/>
        </div> 
        <Avatar/> 
        <MyPosts/>
      </div>
    );
};

export default Profile;