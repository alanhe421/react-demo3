const books = (state = [{title: 'init value'}], action) => {
    if (action.type === 'BOOKS_FETCH_SUCCEEDED') {
        return [
            ...action.books
        ];
    } else {
        return state;
    }
};
export default books;
