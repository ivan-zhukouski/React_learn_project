import React from "react";
import {addNewDialogTextActionCreator, updateNewDialogTextActionCreator} from "../redux/reducers/dialogs-reducer.js";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const addDialogText = () => {
        props.dispatch(addNewDialogTextActionCreator())
    };
    const updateDialogText = (newDialogText) => {
        props.dispatch(updateNewDialogTextActionCreator(newDialogText))
    };
    return (
      <Dialogs addDialogText={addDialogText}
               updateDialogText={updateDialogText}
               messageData={props.messageData}
               dialogsData={props.dialogsData}
               dialogData={props.dialogData}/>
    )
};
export default DialogsContainer
