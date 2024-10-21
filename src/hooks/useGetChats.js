import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/authContext";

const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const { authUser } = useAuthContext();
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
      console.log("From useGetChats: 👴🏼👴🏼👴🏼👴🏼", data);
      setChats(data);
    } catch (error) {
      // alert(error.message);
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    getChats();
    return () => {
      controller.abort(); // Cleanup function to cancel the previous request if the component re-renders
    };
  }, []);

  return { loading, chats };
};

export default useGetChats;
