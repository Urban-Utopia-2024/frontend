import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {
  getUserById,
  logOut,
  registration,
  signInUser,
  confirmEmail,
  getUser,
} from './authActions';
import { AuthState } from './types';

export const buildSignInUser = (builder: ActionReducerMapBuilder<AuthState>) =>
  builder
    .addCase(signInUser.pending, (state) => {
      state.signInStatus = 'pending';
    })
    .addCase(signInUser.fulfilled, (state) => {
      state.signInStatus = 'success';
      state.isAuth = true;
      state.signInError = null;
    })
    .addCase(signInUser.rejected, (state, action) => {
      state.signInStatus = 'error';
      state.signInError = action.payload;
    });

export const buildConfirmEmail = (
  builder: ActionReducerMapBuilder<AuthState>,
) =>
  builder
    .addCase(confirmEmail.pending, (state) => {
      state.confirmeStatus = 'pending';
    })
    .addCase(confirmEmail.fulfilled, (state) => {
      state.confirmeStatus = 'success';
    })
    .addCase(confirmEmail.rejected, (state, action) => {
      state.confirmeError = action.payload;
    });

export const buildRegistration = (
  builder: ActionReducerMapBuilder<AuthState>,
) =>
  builder
    .addCase(registration.pending, (state) => {
      state.signUpStatus = 'pending';
    })
    .addCase(registration.fulfilled, (state) => {
      state.signInStatus = 'success';
      state.signUpStatus = 'success';
      state.isAuth = true;
      state.signInError = null;
      state.signUpError = null;
    })
    .addCase(registration.rejected, (state, action) => {
      state.signUpStatus = 'error';
      state.signUpError = action.payload;
    });

export const buildLogOut = (builder: ActionReducerMapBuilder<AuthState>) =>
  builder
    .addCase(logOut.pending, (state) => {
      state.logOutStatus = 'pending';
    })
    .addCase(logOut.fulfilled, (state) => {
      state.logOutStatus = 'success';
      state.isAuth = false;
      state.logOutError = null;
      state.user = null;
      state.userId = null;
    })
    .addCase(logOut.rejected, (state) => {
      state.logOutStatus = 'error';
      state.logOutError = 'Sorry, something went wrong';
    });

export const buildGetUserById = (builder: ActionReducerMapBuilder<AuthState>) =>
  builder
    .addCase(getUserById.pending, (state) => {
      state.userStatus = 'pending';
    })
    .addCase(getUserById.fulfilled, (state, action) => {
      state.userStatus = 'success';
      state.user = action.payload;
      state.isAuth = true;
      state.userError = null;
    })
    .addCase(getUserById.rejected, (state) => {
      state.userStatus = 'error';
      state.isAuth = false;
      state.user = null;
      state.userError = 'Sorry, something went wrong';
    });

export const buildGetUser = (builder: ActionReducerMapBuilder<AuthState>) =>
  builder
    .addCase(getUser.pending, (state) => {
      state.userStatus = 'pending';
    })
    .addCase(getUser.fulfilled, (state, action) => {
      state.userStatus = 'success';
      state.user = action.payload.data;
      state.isAuth = true;
      state.userError = null;
    })
    .addCase(getUser.rejected, (state) => {
      state.userStatus = 'error';
      state.isAuth = false;
      state.user = null;
      state.userError = 'Sorry, something went wrong';
    });
