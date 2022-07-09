import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../firebase/config";
import { Spin } from "antd";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        navigate("/");
        return;
      }

      // reset user info
      setUser({});
      setIsLoading(false);
      navigate("/login");
    });

    // clean function
    return () => {
      unsubscibed();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin style={{ position: "fixed", inset: 0 }} /> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
