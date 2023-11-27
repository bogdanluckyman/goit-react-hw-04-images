import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchImage = async ({ currentQuery, page }) => {
  const responce = await axios.get(
    `/?q=${currentQuery}&page=${page}&key=39849634-51b0690041743f79df8d2c395&image_type=photo&orientation=horizontal&per_page=12`
  );
  return responce.data;
};
