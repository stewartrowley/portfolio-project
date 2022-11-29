import axios from 'axios';
const apiClientGallery = axios.create({
  baseURL: `https://portfolio-profile.onrender.com/gallery`
});

export default {
  getGallery() {
    return apiClientGallery.get('/1232421312312323');
  },
};
