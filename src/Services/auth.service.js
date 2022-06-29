import axios from "axios";

axios.defaults.baseURL= "http://localhost:8080";

const params = new URLSearchParams();

const signup = (email, password, name) => {

  params.append('email', email);
  params.append('name', name);
  params.append('password', password);
  
  
  return axios
    .post("auth/signup",
      params
    )
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data ?? {};
    });
};

const login = (email, password) => {

  params.append('identifier', email);
  params.append('password', password);

  return axios
    .post("auth/signin", params)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
