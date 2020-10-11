import React from 'react';
import classes from './Avatar.module.css';

function Avatar() {
    return (
      <div className={classes.inform}>
        <div className={classes.ava}>
          <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
        </div>
        <div>
            <p>
              Sebistian Mykola
              <span>
                19 Julay 1992 year
              </span>
            </p>
          </div>
      </div>
    );
};

export default Avatar;