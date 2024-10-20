import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};
export const AuthContextProvider = ({ children }) => {
  const storedAuthUser = localStorage.getItem("authUser");
  const [authUser, setAuthUser] = useState(
    storedAuthUser ? JSON.parse(storedAuthUser) : null
  );



  return (
    <AuthContext.Provider value={{ authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};
