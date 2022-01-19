import axios from 'axios';
import { makeQuery } from 'utils';

export const getAutocomplete = async ({ text, latitude, longitude }) => {
  const query = makeQuery({ text, latitude, longitude });

  try {
    const { data } = await axios.get('/api/autocomplete?' + query);
    return data;
  } catch (e) {
    console.error('Autocomplete.js 에서 에러가 발생했습니다. ', e.message);
  }
};
