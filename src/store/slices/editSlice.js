import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: null,
  pagesCount: null,
  allPages: null,
  token: null,
  type: null,
  selectList: null,
};
const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    setType(state, { payload: { type } }) {
      state.type = type;
    },
    setSelectList(state, { payload: { list } }) {
      state.selectList = list.rows;
    },
    setList(state, { payload: { list } }) {
      state.pagesCount = list.count;
      state.list = list.rows;
      state.allPages = list.allPages;
    },
    updateList(state, { payload: { list } }) {
      state.pagesCount = list.count;
      state.list = list.rows;
      state.allPages = list.allPages;
    },
    removeList(state, payload) {
      state.list = null;
    },
  },
});
export const {
  setList,
  removeList,
  setType,
  setSelectList,
} = editSlice.actions;

export default editSlice.reducer;
