export default (state = 123, action) => {
  console.log(action);
  if (action.type === 'FETCH_POSTS') {
    return action.payload.val || state;
  }
  return state;
}