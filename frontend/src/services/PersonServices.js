import axios from 'axios';
const apiClientPerson = axios.create({
	baseURL: `http://localhost:8080`,

});

export default {
    getPerson() {
        return apiClientPerson.get('/person')
    }
}
