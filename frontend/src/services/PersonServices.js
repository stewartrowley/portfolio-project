import axios from 'axios';
const apiClientPerson = axios.create({
  baseURL: `https://portfolio-profile.onrender.com/person`
});

export default {
  getPerson() {
    return apiClientPerson.get('/1232421312312323');
  },
};
