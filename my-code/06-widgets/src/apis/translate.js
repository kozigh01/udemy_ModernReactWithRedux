import axios from 'axios';

export default axios.create({
  baseURL: 'POST https://translation.googleapis.com/language/translate/v2',
  
})