import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import user from './user';
import userHistory from './user-history';
import books from './books';

const createRootReducer = combineReducers({
    todos,
    visibilityFilter,
    user,
    userHistory,
    books
});
export default createRootReducer;
