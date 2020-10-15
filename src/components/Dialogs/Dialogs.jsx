import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>
                    Dmitriy
                </div>
                <div className={classes.dialog + ' ' + classes.active}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Svitlana
                </div>
                <div className={classes.dialog}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Victor
                </div>
                <div className={classes.dialog}>
                    Valera
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