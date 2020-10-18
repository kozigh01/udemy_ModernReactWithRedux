import jsonplaceholder from "../apis/jsonplaceholder"
import _ from 'lodash';


export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await fetchPosts()(dispatch);
  // await dispatch(fetchPosts());

  // _.uniq(_.map(getState().posts, 'userId'))
  //   .forEach(id => fetchUser(id)(dispatch));

  // alternate lodash option:
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get('/posts');
  const action = {
    type: 'FETCH_POSTS',
    payload: response.data
  };

  dispatch(action);
};

// original without memoization
export const fetchUser = (userId) => async dispatch => {
  const response = await jsonplaceholder.get(`/users/${userId}`);
  dispatch({ type: 'FETCH_USER', payload: response.data });
}

// memoization using lodash
// const _getUser = async (userId) => await jsonplaceholder.get(`/users/${userId}`);
// const _memoizedGetUser = _.memoize(_getUser);
// export const fetchUser = (userId) => async dispatch => {
//   const response = await _memoizedGetUser(userId);
//   dispatch({ type: 'FETCH_USER', payload: response.data });
// }