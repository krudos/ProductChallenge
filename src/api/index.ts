import axios from 'axios';
import {useQuery} from 'react-query';
import {Category, Product} from './types';

//TODO move to env
const BASE_URL = 'https://mysite.com';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const useGetCategories = (id: number) => {
  const route = `${BASE_URL}/category/${id}`;

  const {isLoading, error, data} = useQuery([route], () =>
    api.get<Category>(route).then(res => res.data),
  );

  return {categories: data, isLoading, error};
};

const useGetSubCategories = (id: string) => {
  const route = `${BASE_URL}/product/sub-category/${id}`;

  const {isLoading, error, data} = useQuery([route], () =>
    api.get<Product[]>(route).then(res => res.data),
  );

  return {products: data, isLoading, error};
};

export {BASE_URL, api, useGetCategories, useGetSubCategories};
