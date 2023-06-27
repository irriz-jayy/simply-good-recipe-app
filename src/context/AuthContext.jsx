import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = async (username, password) => {
    try {
      const credentials = {
        user: {
          username: username,
          password: password,
        },
      };

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const { user, jwt } = data;

      // Store the token securely (e.g., in cookies or local storage)

      setUser(user);
      return { user, token: jwt };
    } catch (error) {
      console.log("Login error:", error);
      throw error;
    }
  };

  const logout = () => {
    console.log("logged out");
    // Perform logout logic, such as clearing the stored token
  };

  const authContextValue = {
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
