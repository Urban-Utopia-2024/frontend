export interface Registry {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  mid_name?: string;
}

export interface AuthState {
  user: User | null;
  userId: number | null;
  data: Registry | null;
  isAuth: boolean;

  confirmeStatus: 'initial' | 'pending' | 'success' | 'error';
  confirmeError: string | null | unknown;

  signInStatus: 'initial' | 'pending' | 'success' | 'error';
  signInError: string | null | unknown;

  signUpStatus: 'initial' | 'pending' | 'success' | 'error';
  signUpError: string | null | unknown;

  logOutStatus: 'initial' | 'pending' | 'success' | 'error';
  logOutError: string | null | unknown;

  userStatus: 'initial' | 'pending' | 'success' | 'error';
  userError: string | null | unknown;

  userUpdateStatus: 'initial' | 'pending' | 'success' | 'error';
  userUpdateError: string | null | unknown;
}
