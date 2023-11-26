export const TOKEN_KEY = 'auth_token';

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

const getToken = () => {
  const storedToken = localStorage.getItem(TOKEN_KEY);
  return storedToken || null;
};

export { getToken, setToken, removeToken };
