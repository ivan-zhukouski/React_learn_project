import React from "react";
import profileReducer, {addPostActionCreator, deletePostAC} from "./profile-reducer";
const state ={
    postsData: [
        {id:1, post:'Hi, How are you?? Are you kidding me??aha', likeCount: 24 },
        {id:2, post:'Have you read my message??', likeCount: 27},
    ],
};
test('post should be added', () => {
    let action = addPostActionCreator('Vano');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(3);
});
test('post should be deleted', ()=> {
    let action =  deletePostAC(2);
    let newState = profileReducer(state,action);
    expect(newState.postsData.length).toBe(1)
});
