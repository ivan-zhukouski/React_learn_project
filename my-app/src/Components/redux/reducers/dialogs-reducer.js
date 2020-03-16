const ADD_NEW_DIALOG_TEXT = 'ADD_NEW_DIALOG_TEXT';
const UPDATE_NEW_DIALOG_TEXT = 'UPDATE_NEW_DIALOG_TEXT';

export const addNewDialogTextActionCreator = () => ({
    type: ADD_NEW_DIALOG_TEXT,
});
export const updateNewDialogTextActionCreator = (newDialogText)=> ({
    type:UPDATE_NEW_DIALOG_TEXT, newDialogText: newDialogText
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
    newDialogText: '',
};
const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_NEW_DIALOG_TEXT:
            const newDialogText = {
                id:4,
                message: state.newDialogText,
            };
            state.messageData.push(newDialogText);
            state.newDialogText = '';
            return state;
        case UPDATE_NEW_DIALOG_TEXT:
            state.newDialogText = action.newDialogText;
            return state;
        default:
            return state
    }
};
export default dialogsReducer
