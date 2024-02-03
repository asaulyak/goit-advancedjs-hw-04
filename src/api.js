import axios from 'axios';
import { showError } from './toast.js';

const BASE_API_URL = 'https://pixabay.com/api';
const API_KEY = '41941972-0a3072545573ea3ac4c45ea8e';

export function searchImages(query, page = 1, limit = 40) {
  return axios
    .get(
      `${BASE_API_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${limit}&page=${page}`
    )
    .catch(error => {
      showError(error.message);

      return {
        totalHits: 0,
        hits: [],
      };
    })
    .then(response => {
      const hits = response.data.hits.map(
        ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) => ({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        })
      );

      return {
        hits,
        total: response.data.totalHits,
      };
    });
}
