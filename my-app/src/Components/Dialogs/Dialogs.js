import React from "react";
import style from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import DialogItem from "./DialogItems/DialogItems";
import {addNewDialogTextActionCreator, updateNewDialogTextActionCreator} from "../redux/reducers/dialogs-reducer.js";
import Route from "react-router-dom/es/Route";

const Dialogs = (props) => {
    const dialogColumn = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageFriend = props.messageData.map(m => <Message key={m.id} message={m.message} />);
    const messageMe = props.messageData.map(m => <Message key={m.id} message={m.message} />);

    const addDialogText = ()=>{
        props.dispatch(addNewDialogTextActionCreator())
    };
    const updateDialogText = (event)=>{
        const newDialogText = event.target.value;
        props.dispatch(updateNewDialogTextActionCreator(newDialogText))
    };
    return(
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogColumn}
            </div>
            <div className={style.messages_field}>
                <div>
                    {messageFriend}
                </div>
                <div className={style.low_message}>
                    {messageMe}
                </div>
            </div>
            <textarea onChange={updateDialogText} value={props.dialogData.newDialogText}/>
            <div>
                <button onClick={addDialogText}>add message</button>
            </div>
        </div>
    )
};
export default Dialogs
