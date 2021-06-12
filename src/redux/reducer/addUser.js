const initState = {
    userObj: []
};

export const addUser = (state = initState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                userObj: state.userObj.concat(action.payload),
            };
        default:
            return state;
    }
};