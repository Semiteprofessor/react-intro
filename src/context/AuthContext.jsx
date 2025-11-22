import axios from "axios";
import { useContext } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const registerUser = async (body) => {
    await axios("http://localhost:8899/api/v1/auth/register", {
    method: "POST",
    data: body,
    Authorization: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.data.status === true) {
        console.log(res.data.message);
      }
    })
    .catch((error) => console.log(error.message));
  };

  const loginUser = async (body) => {
    await axios("http://localhost:8899/api/v1/auth/login", {
    method: "POST",
    data: body,
    Authorization: {
      "Content-Type": "application/json",
    }
    })
    .then((res) => {
      if (res.data.status === true) {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
      }
    })
    .catch((error) => console.log(error.message));
  };
  return (
    <AuthContext.Provider value={{ registerUser, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
