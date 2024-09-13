const userHistory = (state = ['1111111'], action) => {
    switch (action.type) {
        case 'USER_HISTORY_FETCH_SUCCEEDED':
            return {
                ...action.user
            };
        default:
            return state;
    }
};

export default userHistory;
