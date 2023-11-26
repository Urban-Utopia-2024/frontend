import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { AuthState } from './types';
import {
  buildConfirmEmail,
  buildGetUserById,
  buildLogOut,
  buildRegistration,
  buildSignInUser,
} from './extraReducers';

const initialState: AuthState = {
  user: null,
  userId: null,
  data: null,
  isAuth: false,

  confirmeStatus: 'initial',
  confirmeError: null,

  signInStatus: 'initial',
  signInError: null,

  signUpStatus: 'initial',
  signUpError: null,

  logOutStatus: 'initial',
  logOutError: null,

  userStatus: 'initial',
  userError: null,

  userUpdateStatus: 'initial',
  userUpdateError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setRegData: (state, action) => {
      state.data = action.payload;
    },
    resetSignUpError: (state) => {
      state.signUpError = null;
      state.signUpStatus = 'initial';
    },
    resetUserStatus: (state) => {
      state.userUpdateStatus = 'initial';
      state.userUpdateError = null;
    },
  },
  extraReducers: (builder) => {
    buildSignInUser(builder);
    buildRegistration(builder);
    buildLogOut(builder);
    buildGetUserById(builder);
    buildConfirmEmail(builder);
  },
});

export const {
  setIsAuth,
  setUserId,
  setRegData,
  resetSignUpError,
  resetUserStatus,
} = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectUserId = (state: RootState) => state.auth.userId;
