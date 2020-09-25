import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 8GsYfehPnEs1PBA6c9_AvBLnUi7eF6N-dIKsr8mgpN0'
  }
});