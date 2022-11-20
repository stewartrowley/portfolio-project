import axios from 'axios';
const apiClientGallery = axios.create({
  baseURL: `http://localhost:8080/gallery`
});

export default {
  getGallery() {
    return apiClientGallery.get('/1232421312312323');
  },
};
