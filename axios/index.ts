import axios from 'axios';

const uri = '/api/product/';

export const getAllAPI = async () => {
  const products = await axios.get('/api/product').then((res) => res);
  return products.data;
};

export const getByIdAPI = async (id: string) => {
  const products = await axios.get(`${uri}${id}`).then((res) => res);
  return products.data;
};

export const getBySearchAPI = async (q: string) => {
  const products = await axios.get(`${uri}?q=${q}`).then((res) => res);
  return products.data;
};

export const changeFavoriteAPI = async (id: string, favorite: boolean) => {
  const products = await axios.patch(`${uri}${id}`, { favorite }).then((res) => res);
  return products.data;
};
