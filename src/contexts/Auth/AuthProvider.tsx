import { AuthContext } from "./AuthContext.tsx";
import { User } from "../../types/User.ts";
import { useEffect, useState } from "react";
import { useApi } from "../../hooks/userApi.ts";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      api.validateToken(token).then((data) => {
        if (data.user) {
          setUser(data.user);
        }
      });
    }
  }, [api]);

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      localStorage.setItem("token", data.token);
      return true;
    }
    return false;
  };

  const logout = async () => {
    await api.logout();
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
