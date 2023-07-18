export const mainReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGIN":
            return {
                ...state,
                isLogged: true,
            };
        case "SET_LOGOUT":
            return {
                ...state,
                isLogged: false,
            };
        case "SET_USERNAME":
            return {
                ...state,
                username: action.payload,
            };
        default:
            return state;
    }
};