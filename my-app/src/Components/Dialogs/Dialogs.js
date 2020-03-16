import React from "react";
import style from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import DialogItem from "./DialogItems/DialogItems";
import Route from "react-router-dom/es/Route";

const Dialogs = (props) => {
    const dialogColumn = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageFriend = props.messageData.map(m => <Message key={m.id} message={m.message}/>);
    const messageMe = props.messageData.map(m => <Message key={m.id} message={m.message}/>);

    const addDialogText = () => {
        if(props.dialogData.newDialogText !==''){
            props.addDialogText();
        } else {
            return false
        }
    };
    const updateDialogText = (event) => {
        const newDialogText = event.target.value;
        props.updateDialogText(newDialogText)
    };
    return (
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialogColumn}
            </div>
            <div className='d-flex flex-column justify-content-center'>
                <Route exect path='/dialogs/dialog/'
                       render={() =>
                           <div className={style.messages_field}>
                               <div>
                                   {messageFriend}
                               </div>
                               <div className={style.low_message}>
                                   {messageMe}
                               </div>
                           </div>}/>
                <div className='d-flex justify-content-center'>
                    <textarea className={style.textarea} onChange={updateDialogText} value={props.dialogData.newDialogText}/>
                    <div className='m-3'>
                        <button onClick={addDialogText}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
};
export default Dialogs
