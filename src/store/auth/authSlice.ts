import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { User } from './types';

interface AuthState {
  user: User | null;
  isAuth: boolean;
}
const initialState: AuthState = {
  user: null,
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
