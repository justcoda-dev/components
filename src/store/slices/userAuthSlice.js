import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  refresh_token: null,
  uuid: null,
  lastName: null,
  firstName: null,
  image: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(
      state,
      { payload: { email, refresh_token, uuid, lastname, firstname } },
    ) {
      state.email = email;
      state.refresh_token = refresh_token;
      state.uuid = uuid;
      state.lastName = lastname;
      state.firstName = firstname;
    },
    setError(state, { payload: { message } }) {
      state.error = message;
    },
    removeUser(state) {
      state.email = null;
      state.error = null;
      state.refresh_token = null;
      state.uuid = null;
      state.lastName = null;
      state.firstName = null;
      state.image = null;
    },
    setUserImage(state, { payload: { image } }) {
      state.image = image;
    },
  },
});

export const selectUser = ({ user }) => user;
export const authStatus = ({ user: { refresh_token } }) => !!refresh_token;

export const { setUser, removeUser, setError, setUserImage } =
  userSlice.actions;
export default userSlice.reducer;
