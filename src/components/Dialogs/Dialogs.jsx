import React from "react";
import classes from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>)

    let newMessage = React.createRef();
    let addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
                {/*<DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                {/*<Message message={messageData[1].message}/>*/}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>Message</button>
            </div>
        </div>
    )
}

export default Dialogs;