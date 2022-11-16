import axios from 'axios';
const apiClientPerson = axios.create({
  baseURL: `http://localhost:8080/person`
});

export default {
  getPerson() {
    return apiClientPerson.get('/1232421312312323');
  },
};
