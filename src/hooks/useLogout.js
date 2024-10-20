import { useState } from "react"
import { useAuthContext } from "../contexts/authContext";


function useLogout() {

  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();
   const logout = async ()=>{
    setLoading(true);
    try {
        const res = await fetch(`${import.meta.env.VITE_Back_END_Host}/logout`, {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        });
        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        localStorage.removeItem("authUser");
        setAuthUser(null);
    } catch (error) {
        alert(error.message);
    }finally{
        setLoading(false);
    }
   }
   return {loading, logout};
}

export default useLogout