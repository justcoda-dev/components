import { request } from './api';


const route = 'user';
const KEY = '228papirosim';
const salt = 10;

export const userApi = {
  getUserLogin: async ({ email, password }) => {

    try {
      return await request.get(`${route}`, {
        params: {
          email,
          password,
        },
      });
    } catch (error) {
      console.error(error);
    }
  },
  getUserList: async (limit = 5) => {
    try {
      return await request.get(`${route}/list`, {
        params: {
          limit,
        },
      });
    } catch (e) {
      console.error(e);
    }
  },
  getOneUser: async (id) => {
    try {
      return await request.get(route, {
        params: {
          id,
        },
      });
    } catch (e) {
      console.error(e);
    }
  },
  createUser: async (data) => {
    try {

      return await request.post(route, data);

    } catch (e) {
      console.error(e);
    }
  },
  updateUser: async () => {
    try {

    } catch (e) {
      console.error(e);
    }
  },
  deleteUser: async (id) => {
    try {
      return await request.delete(route, {
        params: {
          id,
        },
      });
    } catch (e) {
      console.error(e);
    }
  },
  uploadUserImage: async () => {
    try {

    } catch (e) {
      console.error(e);
    }
  },
  deleteUserImage: async () => {
    try {

    } catch (e) {
      console.error(e);
    }
  },
};