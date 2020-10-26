import { SIGN_IN, SIGN_OUT, STREAM_CREATE, STREAM_DELETE, STREAM_EDIT, STREAM_FETCH_ALL, STREAM_FETCH_ONE } from './types';

import streams from '../apis/streams';

export const signIn = (id) => {
  return {
    type: SIGN_IN,
    payload: id
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
}

export const createStream = formValues => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/', { ...formValues, userId });

  dispatch({ type: STREAM_CREATE, payload: response.data });
  
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/');
  dispatch({ type: STREAM_FETCH_ALL, payload: response.data });
};

export const fetchStream = streamId => async dispatch => {
  const response = await streams.get(`/${streamId}`);
  dispatch({ type: STREAM_FETCH_ONE, payload: response.data });
};

export const deleteStream = streamId => async dispatch => {
  await streams.delete(`/${streamId}`);
  dispatch({ type: STREAM_DELETE, payload: streamId });
};

export const editStream = (id, formValues) => async dispatch => {
  const response = await streams.put(`/${id}`, formValues);
  dispatch({ type: STREAM_EDIT, payload: response.data });
};