import { createAsyncThunk } from '@reduxjs/toolkit';
import { setRegData, setUserId } from './authSlice';
import { setToken, getToken, removeToken } from '../../utils/tokenActions';
import axios from 'axios';
import { Login, Registry, User } from './types';
import { RootState } from '..';
import { AxiosResponse } from 'axios';

const BASE_URL = 'https://urban-utopia-2024.webtm.ru/api/v1/';

interface Token {
  token: string;
  user_id: string;
  is_municipal?: boolean;
  is_admin: boolean;
}
type TokenResponse = AxiosResponse<Token>;

export const signInUser = createAsyncThunk(
  'auth/signin',
  async (body: Login, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post<Login, TokenResponse>(
        `${BASE_URL}token/create/`,
        body,
      );
      console.log(response);
      const auth_token = response.data.token;
      const id = response.data.user_id;
      dispatch(setUserId(id));
      setToken(auth_token);
      return dispatch(getUserById(id));
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const confirmEmail = createAsyncThunk(
  'auth/confirm',
  async (body: Registry, { dispatch, rejectWithValue }) => {
    try {
      await axios.post<Login, string>(`${BASE_URL}users/confirm_email/`, {
        email: body.email,
      });
      return dispatch(setRegData(body));
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      removeToken();
      return null;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const getUserById = createAsyncThunk(
  'auth/getUser',
  async (id: string, { rejectWithValue }) => {
    try {
      const token = getToken();
      console.log(token);
      const res = await axios.get<void, User>(`${BASE_URL}users/${id}/`, {
        headers: { Authorization: `Token ${token}` },
      });
      return res;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const registration = createAsyncThunk(
  'auth/signup',
  async (code: string, { dispatch, rejectWithValue, getState }) => {
    try {
      const body = (getState() as RootState).auth.data;
      const bodyData = { ...body, secret_code: code };
      const res = await axios.post<Registry, User>(
        `${BASE_URL}users/`,
        bodyData,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      const data = { email: body?.email, password: body?.password } as Login;
      dispatch(signInUser(data));
      return res;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
