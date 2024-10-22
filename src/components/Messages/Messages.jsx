
import styles from "./Messages.module.css"; // Adjust the path as needed
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";
import { useAuthContext } from "../../contexts/authContext";

const Messages = ({ contactName }) => {
  const { messages, loading } = useGetMessages();
  const {authUser} = useAuthContext();
  useListenMessages();
  return (
    <div className={styles.messagesContainer}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={
            message.senderId === authUser.user._id? styles.userMessage : styles.contactMessage
          }
        >
          {message.message} {/* Ensure this is a string */}
        </div>
      ))}
      {!loading && messages.length === 0 && (
        <p style={{ color: '#CEE3FF' }} className=" text-center ">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
