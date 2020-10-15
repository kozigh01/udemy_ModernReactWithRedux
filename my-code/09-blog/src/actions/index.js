import jsonplaceholder from "../apis/jsonplaceholder"


export const fetchPosts = (val=789) => async dispatch => {
  const response = await jsonplaceholder.get('/posts');
  const action = {
    type: 'FETCH_POSTS',
    payload: { val, response }
  };
  dispatch(action);
};