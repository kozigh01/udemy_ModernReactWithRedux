import axios from 'axios';

const KEY = 'AIzaSyB6u2hAXY0gTcjPCPXCCCkKLPZEaailcHQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});