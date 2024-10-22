import React from "react";
import styles from "./Messages.module.css"; // Adjust the path as needed
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = ({ contactName }) => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  return (
    <div className={styles.messagesContainer}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.isUser ? styles.userMessage : styles.contactMessage
          }
        >
          {message.text} {/* Ensure this is a string */}
        </div>
      ))}
      {!loading && messages.length === 0 && (
        <p className=" text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
