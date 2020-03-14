
export const store = {
    _state: {
        profileData: {
            postsData: [
                {id:1, post:'Hi, How are you?? Are kidding me??', likeCount: 24 },
                {id:2, post:'Have you read my message??', likeCount: 27},
            ],
            newPostText: '',
        },
        dialogData: {
            dialogsData: [
                {name: 'Ivan', id: 1,},
                {name: 'Dimon', id: 2,},
            ],
            messageData:[
                {message:'Yo, bro!!', id: 1},
                {message:'How are you??', id: 2},
                {message:'How are you??', id: 3},
            ],
        },
        sideBarData: {
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
        if(action.type === 'ADD_NEW_POST'){
            const newPost = {
                id:3,
                post: this._state.profileData.newPostText,
                likeCount: 0,
            };
            this._state.profileData.postsData.push(newPost);
            this._state.profileData.newPostText = '';
            this._rerender()
        } else if(action.type === 'UPDATE_POST_TEXT'){
            this._state.profileData.newPostText = action.newText;
            this._rerender()
        }
    }
};

window.store = store;
export default store
