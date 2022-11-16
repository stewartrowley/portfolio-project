import axios from 'axios';
const apiClientAbout = axios.create({
  baseURL: `http://localhost:8080/about`
});

export default {
  
    getAbout() {
      return apiClientAbout.get('/1232421312312323')
    }
  };
  