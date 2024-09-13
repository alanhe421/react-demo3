const user = (state = {
    'name': null,
    'age': 1
}, action) => {
    switch (action.type) {
        case 'USER_FETCH_SUCCEEDED':
            return {
                ...action.user
            };
        case 'UPDATE_USER_AGE':
            return ({
                ...state,
                age: state.age + 1
            });
        default:
            return state;
    }
};

export default user;
