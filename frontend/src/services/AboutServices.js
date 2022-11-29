import axios from 'axios';
const apiClientAbout = axios.create({
  baseURL: `https://portfolio-profile.onrender.com/about`
});

export default {
  
    getAbout() {
      return apiClientAbout.get('/1232421312312323')
    }
  };
  