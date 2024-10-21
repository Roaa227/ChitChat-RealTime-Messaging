import { createContext, useContext, useState } from "react";

export const chatContext = createContext();

export const useChatContext = ()=>{
   return  useContext(chatContext);
};
export const ChatContextProvider = ({children})=>{
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);

    return <chatContext.Provider value={{selectedChat, setSelectedChat, messages, setMessages}}>
        {children}
    </chatContext.Provider>
}