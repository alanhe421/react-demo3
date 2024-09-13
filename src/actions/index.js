let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
export const setUserInfo = (user) => ({
  type: 'USER_FETCH_SUCCEEDED',
  user
});

export const setUserInfoAsync = (user) => ({
  type: 'USER_FETCH_SUCCEEDED_ASYNC',
  user
});


export const setBooksInfo = (books) => ({
  type: 'BOOKS_FETCH_SUCCEEDED',
  payload: {books}
});

export const setUserHistory = (history) => ({
  type: 'USER_HISTORY_FETCH_SUCCEEDED',
  history
});

export const testSaga = () => ({
  type: 'TEST_SAGA'
});

export const fetchUserAction = (count) => ({
  type: 'USER_FETCH',
  payload: {
    count
  }
});


export const fetchUserAction2 = () => {

};

export const updateUserAgeAction = () => ({
  type: 'UPDATE_USER_AGE'
});
