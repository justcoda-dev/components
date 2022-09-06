import { userApi } from '../../API/user.api';
import { setUser } from '../slices/userSlice';

export const user = {
  login: async ({ email, password }, { dispatch }) => {
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
};
