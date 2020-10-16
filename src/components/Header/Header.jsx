import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img src='https://www.georgiapower.com/content/georgia-power/en/company/media-resources/logos/_jcr_content/ifooter/columnctr/colTwo/columnctr_copy/colTwo/adaptiveimage.img.320.low.png/1516888423050.png'/>
            <span className={classes.phone}>+380 (097) 236-586-22</span>
        </header>
    );
};

export default Header;