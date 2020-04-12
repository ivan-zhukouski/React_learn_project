import React, {FC} from "react";
import style from "./Dialogs.module.css"
import Message from "./Messages/Messages";
import DialogItem from "./DialogItems/DialogItems";
import {Route} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../FormControls/validators/validators";
import {TextArea} from "../../FormControls/RenderFormPart";
import {DialogsDataType, MessageDataType} from "../../redux/reducers/dialogs-reducer";

type PropsType = {
    dialogsData: Array<DialogsDataType>
    messageData: Array<MessageDataType>
    addDialogText: (newDialog: string)=>void
}

const Dialogs:FC<PropsType> = (props) => {
    const dialogColumn = props.dialogsData.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
    const messageFriend = props.messageData.map(m => <Message key={m.id} message={m.message}/>);
    const messageMe = props.messageData.map(m => <Message key={m.id} message={m.message}/>);

    const onSubmit = (newDialog:any) => {
        props.addDialogText(newDialog.newDialog)
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
                <DialogFieldRedux onSubmit={onSubmit}/>
            </div>

        </div>
    )
};
const maxLength10 = maxLengthCreator(10);
const DialogField= (props:any) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div className='d-flex justify-content-center'>
                <Field name='newDialog'
                       component={TextArea}
                       type='text'
                       validate={[required, maxLength10 ]} />
                <div className='m-3'>
                    <button>Send</button>
                </div>
            </div>
        </form>
    )
};
const DialogFieldRedux = reduxForm({
    form: 'addDialogForm'
})(DialogField);
export default Dialogs
