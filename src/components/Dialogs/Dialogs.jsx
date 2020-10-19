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

    let  dialogsData = [
        {id: 1, name: 'Dmitriny'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svitlana'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Vera'},
        {id: 6, name: 'Sasha'},
    ]

    let  messageData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Thanks. How are your dill my Friend?'},
        {id: 4, message: 'Thanks everything is ok and you?'},
        {id: 4, message: 'YOUUu'},
    ]



    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
            </div>
        </div>
    )
}

export default Dialogs;