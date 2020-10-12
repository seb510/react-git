import React from 'react';
import Avatar from './Avatar/Avatar';
import Back from './Back/Back';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile() {
    return (
      <div className={classes.content}>
        <Back/>
        <Avatar message='Never give up'/> 
        <MyPosts/>
      </div>
    );
};

export default Profile;