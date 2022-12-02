import axios from 'axios';
const apiClientMessage = axios.create({
  baseURL: (`https://portfolio-profile.onrender.com/`)
});

export default {
  
    postMessage(data) {
      return apiClientMessage.post('message', data)
    }
  };