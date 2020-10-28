import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';

function Profile(props) {
    return (
      <div className={classes.content}>
        <ProfileInfo/>
        <MyPosts posts={props.posts}/>
      </div>
    );
};

export default Profile;