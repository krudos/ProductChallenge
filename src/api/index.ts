import axios from 'axios';
import {useQuery} from 'react-query';

//TODO move to env
const BASE_URL = 'https://mysite.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Category {
  id: number;
  name: string;
  description: string;
}

const useGetCategories = (id: number) => {
  const route = `${BASE_URL}/category/${id}`;

  const {isLoading, error, data} = useQuery([route], () =>
    api.get<Category>(route).then(res => res.data),
  );

  const categories = data ?? [];

  return {categories, isLoading, error};
};

export {BASE_URL, api, useGetCategories};
