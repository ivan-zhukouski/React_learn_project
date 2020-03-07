import React from "react";
import style from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import DialogItem from "./DialogItems/DialogItems";

let dialogsData = [
    {name: 'Ivan', id: 1,},
    {name: 'Dimon', id: 2,},
];
const dialog = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

let messageData = [
    {message:'Yo, bro!!', id: 1},
    {message:'How are you??', id: 2}
];
const message = messageData.map(m => <Message message={m.message} />);

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialog_items}>
                {dialog}
            </div>
            <div >
                {message}
            </div>
        </div>
    )
};
export default Dialogs
