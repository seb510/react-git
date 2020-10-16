import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/1'>Dmitriy</NavLink>
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/2'>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Svitlana</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Victor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/6'>Vera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>
                    Hi!
                </div>
                <div className={classes.message}>
                    How are your dill my Friend?
                </div>
                <div className={classes.message}>
                    Thanks everything is ok! and you?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;