export const setToken = (token: string) => {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `token=${token}; expires=${expires}; path=/; SameSite=Lax`;
};

export const removeToken = () => {
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};
