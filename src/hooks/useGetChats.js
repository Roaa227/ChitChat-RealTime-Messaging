import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/authContext";

const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const { authUser } = useAuthContext();
  useEffect(() => {
    const getChats = async () => {
      if (!authUser) return;
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_Back_END_Host}/sidebarUsers`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setChats(data);
      } catch (error) {
        // alert(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    getChats();
  }, [authUser]);

  return { loading, chats };
};

export default useGetChats;
