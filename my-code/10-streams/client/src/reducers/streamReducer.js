import _ from 'lodash';
import { STREAM_CREATE, STREAM_DELETE, STREAM_EDIT, STREAM_FETCH_ALL, STREAM_FETCH_ONE } from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case STREAM_FETCH_ONE:
    case STREAM_CREATE:
    case STREAM_EDIT:
      return { ...state, [action.payload.id]: action.payload };
    case STREAM_FETCH_ALL:
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case STREAM_DELETE:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;