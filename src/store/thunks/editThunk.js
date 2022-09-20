import { createAsyncThunk } from '@reduxjs/toolkit';
import EditListApi from '../../API/editList.api';
import { setList, setSelectList } from '../slices/editSlice';

const editThunk = {
  getList: createAsyncThunk(
    'edit/getList',
    async ({ limit, page, type }, { dispatch }) => {
      const api = new EditListApi(type);
      const response = await api.getList(limit, page);
      dispatch(setList({ ...response.data }));
      try {
      } catch (error) {
        console.error('edit thunk getList error', error);
      }
    },
  ),
  getSelectList: createAsyncThunk('edit/getSelectList', async ({ type }, { dispatch }) => {
    try {
      const api = new EditListApi(type);
      const response = await api.getSelectList();
      if (response.status === 200) {
        return dispatch(setSelectList({ ...response.data }));
      }
      throw new Error(response.status);
    } catch (error) {
      console.error('edit thunk getSelectList error ', error);
    }
  }),
  createItem: createAsyncThunk(
    'edit/createItem',
    async ({ item, limit, page, type }, { dispatch }) => {
      try {
        const api = new EditListApi(type);
        const response = await api.createItem(item);
        if (response.status === 200) {
          return dispatch(getList({ limit, page, type }));
        }
        throw new Error(response.status);
      } catch (error) {
        console.error('edit thunk createItem error ', error);
      }
    },
  ),
};

export const { getList, createItem, getSelectList } = editThunk;
