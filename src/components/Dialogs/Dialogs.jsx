import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name='Dmitriy' id='1'/>
                <DialogsItem name='Andrey' id='2'/>
                <DialogsItem name='Svitlana' id='3'/>
                <DialogsItem name='Victor' id='4'/>
                <DialogsItem name='Vera' id='5'/>
                <DialogsItem name='Sasha' id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='H!'/>
                <Message message='How are your dill my Friend?'/>
                <Message message='Thanks everything is ok! and you?'/>
                <Message message='YOU?'/>
            </div>
        </div>
    )
}

export default Dialogs;