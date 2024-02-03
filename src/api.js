import axios from 'axios';

const BASE_API_URL = 'https://pixabay.com/api';
const API_KEY = '41941972-0a3072545573ea3ac4c45ea8e';

export async function searchImages(query, page = 1, limit = 40) {
  const response = await axios.get(
    `${BASE_API_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${limit}&page=${page}`
  );

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
}
