import { api } from './api';

const route = 'user';
export const editApi = {
  users: {
    getUserList: async (limit, page) => {
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
  },
  products: {
    getProductList: async (limit, page) => {
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
    getOneProduct: async (uuid) => {
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
    createProduct: async (data) => {
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
    deleteProduct: async (uuid) => {
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
    uploadProductImage: async (formData, uuid) => {
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
    deleteProductImage: async () => {
      try {
      } catch (error) {
        return error.response;
      }
    },
  },
};
