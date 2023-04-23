import axios from 'axios';

axios.defaults.baseURL = 'https://6443d73190738aa7c078cc6d.mockapi.io';

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`/users?limit=9&page=${page}`);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateUser = async (id, followers) => {
  try {
    const { data } = await axios.put(`/users/${id}`, {
      followers: followers,
    });

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
