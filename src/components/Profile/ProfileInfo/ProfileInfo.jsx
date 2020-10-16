import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img src='https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg' className={classes.back}/>
            </div>
            <div className={classes.inform}>
                <div className={classes.ava}>
                    <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
                </div>
                <div>
                    <p>Sebastian Mykola<span>19 Julay 1992 year</span>
                        {props.message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;