export function isLoggedIn() {
  return sessionStorage.getItem("isLoggedIn");
}
export function handleInvalidToken() {
  //clearToken();
  clearUserData();
  window.location.href = "/login";
}

export function clearUserData() {
  sessionStorage.removeItem("isLoggedIn");
}

