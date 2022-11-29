import axios from 'axios';
const apiClientEmployment = axios.create({
  baseURL: `https://portfolio-profile.onrender.com/employment`
});

export default {
  
    getEmployment() {
      return apiClientEmployment.get('/1232421312312323')
    }
  };
  