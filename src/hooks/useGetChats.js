import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/authContext";

const useGetChats = () => {
  const [loading, setLoading] = useState(false);
  const [chats, setChats] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    const getChats = async (signal) => {
      if (!authUser) return;
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_Back_END_Host}/sidebarUsers`,
          {
            method: "GET",
            credentials: "include",
            signal, // pass abort signal
          }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        console.log("From useGetChats: 👴🏼👴🏼👴🏼👴🏼", data);
        setChats(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
        }
        // alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    const controller = new AbortController();
    if (authUser) {
      getChats(controller.signal);
    }
    return () => {
      controller.abort(); // Cleanup function to cancel the previous request if the component re-renders
    };
  }, [authUser]);

  return { loading, chats };
};

export default useGetChats;
