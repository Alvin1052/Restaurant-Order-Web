import api from './api';

export const getRestaurant = async () => {
  const res = await api.get('/resto');
  return res.data;
};
export const getRecommendResto = async () => {
  const res = await api.get('/resto/recommended');
  return res.data;
};
export const getRestoById = async ({ id }: { id: number }) => {
  const res = await api.get(`/resto/${id}`);
  return res.data;
};

export const getProfile = async () => {
  const res = await api.get('/auth/profile');
  return res.data;
};
