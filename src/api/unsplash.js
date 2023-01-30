import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID iMPhkKDlSSg6iaU4V3dz48cWnbcaT9M6UoFjUlx7YNw',
  },
});
