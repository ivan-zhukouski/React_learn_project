export type FriendsType = {
    name:string
    id: number
}
const initialState = {
    friendsData: {
        friends: [
            {name: 'Artem', id: 1},
            {name: 'Dima', id: 2},
            {name: 'Alex', id: 3},
            {name: 'Pasha', id: 4},
        ] as Array<FriendsType>
    } as object,
};
type InitialStateType = typeof initialState
export const friendsReducer = (state = initialState, action:any):InitialStateType => {
    return state
};
