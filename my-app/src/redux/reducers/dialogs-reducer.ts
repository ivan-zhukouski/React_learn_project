const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
type AddNewDialogType = {
    type: typeof ADD_NEW_DIALOG_TEXT
    newDialog: string
}
export const addNewDialogTextActionCreator = (newDialog: string):AddNewDialogType => ({
    type: ADD_NEW_DIALOG_TEXT, newDialog
});
export type DialogsDataType = {
    name: string
    id: number
}
export type MessageDataType = {
    message: string
    id: number
}
const initialState = {
    dialogsData: [
        {name: 'Ivan', id: 1,},
        {name: 'Dimon', id: 2,},
        {name: 'Tema', id: 3,},
    ] as Array<DialogsDataType> ,
    messageData:[
        {message:'Yo, bro!!', id: 1},
        {message:'How are you??', id: 2},
        {message:'How are you??', id: 3},
    ] as Array<MessageDataType>,
};
type InitialStateType = typeof initialState
const dialogsReducer = (state = initialState, action:any):InitialStateType => {
    switch (action.type) {
        case ADD_NEW_DIALOG_TEXT:
            const newDialogText = {
                id:4,
                message: action.newDialog
            };
            return {
                ...state,
                messageData: [...state.messageData, newDialogText],
            };
        default:
            return state
    }
};
export default dialogsReducer
