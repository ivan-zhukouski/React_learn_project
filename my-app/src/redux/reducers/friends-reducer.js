
const initialState = {
    friendsData: {
        friends: [
            {name: 'Artem', id: 1},
            {name: 'Dima', id: 2},
            {name: 'Alex', id: 3},
            {name: 'Pasha', id: 4},
        ]
    },
};

export const friendsReducer = (state = initialState, action) => {
    return state
};
