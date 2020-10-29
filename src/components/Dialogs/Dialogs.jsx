import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {



    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)

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