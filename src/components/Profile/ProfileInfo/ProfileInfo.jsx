import React from 'react';
import classes from './ProfileInfo.module.css';

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img src='https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg' className={classes.back}/>
            </div>
            <div className={classes.inform}>
                <div className={classes.ava}>
                    <img src='https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'/>
                </div>
                <p>Sebastian Mykola<br/>19 Julay 1992 year
                    {props.message}
                </p>
            </div>
        </div>
    );
};

export default ProfileInfo;