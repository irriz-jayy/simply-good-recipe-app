import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    return fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.jwt) {
          const token = data.jwt;

          // Store the token securely (e.g., in cookies or local storage)

          setUser(data.user);
          return { user: data.user, token: token };
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .catch((error) => {
        console.log("Login error:", error);
        throw error;
      });
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
