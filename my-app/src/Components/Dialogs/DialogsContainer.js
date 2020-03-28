import React from "react";
import {addNewDialogTextActionCreator} from "../../redux/reducers/dialogs-reducer.js";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogData.dialogsData,
        messageData: state.dialogData.messageData,
        dialogData: state.dialogData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addDialogText: (newDialog) => {
            dispatch(addNewDialogTextActionCreator(newDialog))
        },
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer
