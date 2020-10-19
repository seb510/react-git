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

    let  dialogs = [
        {id: 1, name: 'Dmitriy'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Svitlana'},
        {id: 4, name: 'Victor'},
        {id: 5, name: 'Vera'},
        {id: 6, name: 'Sasha'},
    ]

    let  messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Thanks. How are your dill my Friend?'},
        {id: 4, message: 'Thanks everything is ok and you?'},
        {id: 4, message: 'YOUUu'},
    ]

    let dialogsElements = dialogs.
    map(d => <DialogsItem name={d.name} id={d.id}/>)

    let messagesElements = messages.
    map(m => <Message message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/*<DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                {/*<Message message={messageData[1].message}/>*/}

            </div>
        </div>
    )
}

export default Dialogs;