import React from "react";
import style from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import DialogItem from "./DialogItems/DialogItems";

const Dialogs = (props) => {
    const dialog = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messageFriend = props.messageData.map(m => <Message message={m.message} />);
    const messageMe = props.messageData.map(m => <Message message={m.message} />);
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
        </div>
    )
};
export default Dialogs
