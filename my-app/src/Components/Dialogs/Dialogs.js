import React, {createRef} from "react";
import style from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import DialogItem from "./DialogItems/DialogItems";
import {addNewDialogTextActionCreater, updateNewDialogTextActionCreater} from "../redux/store";

const Dialogs = (props) => {
    const dialog = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageFriend = props.messageData.map(m => <Message key={m.id} message={m.message} />);
    const messageMe = props.messageData.map(m => <Message key={m.id} message={m.message} />);

    const dialogRef = createRef();
    const addDialogText = ()=>{
        props.dispatch(addNewDialogTextActionCreater())
    };
    const updateDialogText = ()=>{
        const newDialogText = dialogRef.current.value;
        props.dispatch(updateNewDialogTextActionCreater(newDialogText))
    };
    return(
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialog}
            </div>
            <div className={style.messages_field}>
                <div>
                    {messageFriend}
                </div>
                <div className={style.low_message}>
                    {messageMe}
                </div>
            </div>
            <textarea onChange={updateDialogText} ref={dialogRef} value={props.dialogData.newDialogText}/>
            <div>
                <button onClick={addDialogText}>add message</button>
            </div>
        </div>
    )
};
export default Dialogs
