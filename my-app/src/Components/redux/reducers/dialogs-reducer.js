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
        case ADD_NEW_DIALOG_TEXT: {
            const newDialogText = {
                id:4,
                message: state.newDialogText,
            };
            let stateCopy = {...state};
            stateCopy.messageData = [...state.messageData];
            stateCopy.messageData.push(newDialogText);
            stateCopy.newDialogText = '';
            return stateCopy;
        }
        case UPDATE_NEW_DIALOG_TEXT: {
            let stateCopy = {...state};
            stateCopy.newDialogText = action.newDialogText;
            return stateCopy;
        }
        default:
            return state
    }
};
export default dialogsReducer
