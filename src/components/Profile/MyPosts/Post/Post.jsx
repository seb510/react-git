import React from 'react';
import classes from './Post.module.css';

function Post() {
    return (
        <div className={classes.item}>
          <img src="https://static.wikia.nocookie.net/avatar/images/0/09/3%D1%8515_%D0%9C%D1%8D%D0%B9_%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82.jpg/revision/latest/top-crop/width/360/height/450?cb=20110327130225&path-prefix=ru" alt="Avatar"/>
          Post 1
          <p>Like</p>
        </div>
    );
};

export default Post;