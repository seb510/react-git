import React from 'react';
import classes from './Profile.module.css';

function Profile() {
    return (
        <div className={classes.content}>
        <div>
          <img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg' className={classes.back}/>
        </div>  
        <div className={classes.ava}>
          <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
          discription
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
          </div>
        </div>
      </div>
    );
};

export default Profile;