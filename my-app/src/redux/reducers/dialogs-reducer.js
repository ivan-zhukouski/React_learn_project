const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';

export const addNewDialogTextActionCreator = (newDialog) => ({
    type: ADD_NEW_DIALOG_TEXT,newDialog
});

const initialStore = {
    dialogsData: [
        {name: 'Ivan', id: 1,},
        {name: 'Dimon', id: 2,},
        {name: 'Tema', id: 3,},
    ],
    messageData:[
        {message:'Yo, bro!!', id: 1},
        {message:'How are you??', id: 2},
        {message:'How are you??', id: 3},
    ],
};
const dialogsReducer = (state = initialStore, action) => {
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
