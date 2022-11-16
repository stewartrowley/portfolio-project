import axios from 'axios';
const apiClientEmployment = axios.create({
  baseURL: `http://localhost:8080/employment`
});

export default {
  
    getEmployment() {
      return apiClientEmployment.get('/1232421312312323')
    }
  };
  