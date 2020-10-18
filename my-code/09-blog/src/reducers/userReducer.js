export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      const filtered = state.filter(s => s.id !== action.payload.id);
      return [...filtered, action.payload];
    default:
      return state;
  }
};