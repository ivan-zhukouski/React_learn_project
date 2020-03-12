
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
                {message:'How are you??', id: 2}
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
    rerender(){
        console.log('hi')
    },
    getState() {
        return this._state;
    },
    addPost(){
        const newPost = {
            id:3,
            post: this._state.profileData.newPostText,
            likeCount: 0,
        };
        this._state.profileData.postsData.push(newPost);
        this._state.profileData.newPostText = '';
        this.rerender()

    },
    updatePostText(newText){
        this._state.profileData.newPostText = newText;
        this.rerender()
    },
    subscribe(observer){
        this.rerender = observer
    },
};

window.store = store;
export default store
