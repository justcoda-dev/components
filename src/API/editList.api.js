import { api } from './api';

export default class EditListApi {
  constructor(type) {
    this.route = type;
  }

  async getList(limit, page) {
    try {
      return await api.get(`${this.route}/list`, {
        params: {
          limit,
          page,
        },
      });
    } catch (error) {
      return error.response;
    }
  }

  async getOne(uuid) {
    try {
      return await api.get(this.route, {
        params: {
          uuid,
        },
      });
    } catch (error) {
      return error.response;
    }
  }

  async getSelectList() {
    try {
      return await api.get(`category/select-list`);
    } catch (error) {
      console.error(error);
    }
  }

  async createItem(data) {
    try {
      return await api.post(`${this.route}/create`, data);
    } catch (error) {
      return error.response;
    }
  }

  async updateItem(uuid, data) {
    try {
      return await api.patch(`${this.route}/update`, data, {
        params: { uuid },
      });
    } catch (error) {
      return error.response;
    }
  }

  async deleteItem(uuid) {
    try {
      return await api.delete(this.route, {
        params: {
          uuid,
        },
      });
    } catch (error) {
      return error.response;
    }
  }

  async uploadItemImage(formData, uuid) {
    try {
      const response = await api.post(`${this.route}/image`, formData, {
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
  }

  async deleteItemImage() {
    try {
    } catch (error) {
      return error.response;
    }
  }
}
