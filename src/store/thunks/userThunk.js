import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../API/user.api';
import {
  removeUser,
  setError,
  setUser,
  setUserImage,
} from '../slices/userAuthSlice';

export const userThunk = {
  loginAsync: createAsyncThunk(
    'user/userLoginAsync',
    async ({ email, password }, { dispatch }) => {
      try {
        const { data } = await userApi.postUserLogin({
          email,
          password,
        });
        if (data.status) {
          const { user } = data;
          dispatch(setUser(user));
          localStorage.setItem('token', user.access_token);
          return;
        }
        throw new Error(data.error);
      } catch (error) {
        console.log(error);
        // dispatch(setError(error));
      }
    },
  ),
  logoutAsync: createAsyncThunk(
    'user/userLogoutAsync',
    async (_, { dispatch }) => {
      try {
        const response = await userApi.postUserLogOut();
        console.log(`logout status`, response);
        dispatch(removeUser());
        localStorage.removeItem('token');
      } catch (error) {
        console.error(error);
      }
    },
  ),
  registrationAsync: createAsyncThunk(
    'user/userRegistrationAsync',
    async (
      { password, email, firstName, lastName, fileImage },
      { dispatch },
    ) => {
      try {
        const uploadUserImage = async (uuid, fileImage) => {
          const formData = new FormData();
          formData.append('file', fileImage);
          return await userApi.uploadUserImage(formData, uuid);
        };

        const { data } = await userApi.createUser({
          password,
          email,
          firstname: firstName,
          lastname: lastName,
        });

        if (data.status) {
          const { user } = data;
          localStorage.setItem('token', user.access_token);
          dispatch(setUser(user));

          if (fileImage) {
            const { data } = await uploadUserImage(user.uuid, fileImage); // переробити

            dispatch(setUserImage(data.filePath));
          }
          return;
        }
        dispatch(setError({ message: 'ERRORRRR' }));
      } catch (error) {
        console.error(error);
        // rejectWithValue(error);
      }
    },
  ),
  checkAuthAsync: createAsyncThunk(
    'user/checkAuthAsync',
    async (_, { dispatch }) => {
      try {
        const { data } = await userApi.refreshToken();
        if (data.status) {
          localStorage.setItem('token', data.user.access_token);
          dispatch(setUser(data.user));
        }
      } catch (error) {
        console.error(error);
      }
    },
  ),
};

export const { loginAsync, logoutAsync, registrationAsync, checkAuthAsync } =
  userThunk;
