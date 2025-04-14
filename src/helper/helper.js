let nav;

export function setNav(n) {
  nav = n;
}

export function navigationTo(link) {
  nav(link);
}

export function removeToken() {
  localStorage.clear("");
}
