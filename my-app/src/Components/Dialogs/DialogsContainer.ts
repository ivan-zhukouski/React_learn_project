import {addNewDialogTextActionCreator} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import { AppStateType } from "../../redux/redux-store";

let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsData: state.dialogData.dialogsData,
        messageData: state.dialogData.messageData,
        dialogData: state.dialogData
    }
};
let mapDispatchToProps = (dispatch:any) => {
    return {
        addDialogText: (newDialog:string) => {
            dispatch(addNewDialogTextActionCreator(newDialog))
        },
    }
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer
