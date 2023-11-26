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

export type User = Omit<Registry, 'password'>;
