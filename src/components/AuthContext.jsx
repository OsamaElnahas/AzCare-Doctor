import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("isLoggedIn") === "true",
  );
  const [userName, setUserName] = useState(
    () => localStorage.getItem("userName") || "",
  );
  const [isLoading] = useState(false);

  const login = (userName) => {
    localStorage.setItem("token", "demo-token");
    localStorage.setItem("userName", userName);
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
    setUserName(userName);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("rememberMe");
    setIsLoggedIn(false);
    setUserName("");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, userName, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
