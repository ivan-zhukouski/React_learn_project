import profileReducer from "./reducers/profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";

export const store = {
    _state: {
        profileData: {
            postsData: [
                {id:1, post:'Hi, How are you?? Are you kidding me??aha', likeCount: 24 },
                {id:2, post:'Have you read my message??', likeCount: 27},
            ],
            newPostText: '',
        },
        dialogData: {
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
        },
        sidebarData: {
            friendsData: [
                {name: 'Artem', id: 1},
                {name: 'Dima', id: 2},
                {name: 'Alex', id: 3},
                {name: 'Pasha', id: 4},
            ]
        },
    },
    _rerender(){
        console.log('hi')
    },
    subscribe(observer){
        this._rerender = observer
    },
    getState() {
        return this._state;
    },

    dispatch(action){
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogData = dialogsReducer(this._state.dialogData, action);
        this._rerender()
    }
};

export default store
