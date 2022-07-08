import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/config";

import { useNavigate } from "react-router";
import { Spin } from "antd";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      console.log({ user });

      if (user) {
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setIsLoading(false);
        navigate("/");
        return;
      }
      setUser({});
      setIsLoading(false);
      navigate("/login");
    });

    //clean function
    return () => {
      unsubscibed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
