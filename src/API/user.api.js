import { api, apiWithDomain } from './api';

const route = 'user';

export const userApi = {
  postUserLogin: async ({ email, password }) => {
    try {
      return await api.post(`${route}/login`, { email, password });
    } catch (error) {
      return error.response;
    }
  },
  postUserLogOut: async () => {
    try {
      return await api.post(`${route}/logout`);
    } catch (error) {
      return error.response;
    }
  },
  getUserList: async (limit = 5, page = 1) => {
    try {
      return await api.get(`${route}/list`, {
        params: {
          limit,
          page,
        },
      });
    } catch (error) {
      return error.response;
    }
  },
  getOneUser: async (uuid) => {
    try {
      return await api.get(route, {
        params: {
          uuid,
        },
      });
    } catch (error) {
      return error.response;
    }
  },
  createUser: async (data) => {
    try {
      return await api.post(`${route}/registration`, data);
    } catch (error) {
      return error.response;
    }
  },
  updateUser: async (uuid, data) => {
    try {
      return await api.patch(route, data, {
        params: { uuid },
      });
    } catch (error) {
      return error.response;
    }
  },
  deleteUser: async (uuid) => {
    try {
      return await api.delete(route, {
        params: {
          uuid,
        },
      });
    } catch (error) {
      return error.response;
    }
  },
  uploadUserImage: async (formData, uuid) => {
    try {
      const response = await api.post(`${route}/image`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params: {
          uuid,
        },
      });
      return response;
    } catch (error) {
      return error.response;
    }
  },
  deleteUserImage: async () => {
    try {
    } catch (error) {
      return error.response;
    }
  },
  refreshToken: async () => {
    try {
      return await apiWithDomain.get(`${route}/refresh`);
    } catch (error) {
      return error.response;
    }
  },
};
