import { configureStore } from '@reduxjs/toolkit';
import editReducer from './slices/editSlice';
import userReducer from './slices/userAuthSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    editList: editReducer,

  },
});
