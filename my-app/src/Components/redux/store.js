const store = {
    profileData: {
        postsData: [
            {id:1, post:'Hi, How are you?? Are kidding me??', likeCount: 24 },
            {id:2, post:'Have you read my message??', likeCount: 27},
        ],
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
    }
};

export const addPost = (postMessage) => {
    const newPost = {
        id: 3,
        post: postMessage,
        likeCount: 0,
    };
    store.profileData.postsData.push(newPost)
};
export default store