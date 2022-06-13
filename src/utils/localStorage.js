class localStorage {
  getToken(name) {
    return JSON.parse(window.localStorage.getItem(name));
  }
  saveToken(value) {
    window.localStorage.setItem("token", JSON.stringify(value));
  }
  clearToken() {
    window.localStorage.removeItem("token");
  }
}

export default new localStorage();
