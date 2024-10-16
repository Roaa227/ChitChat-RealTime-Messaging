import React from 'react';
import styles from './Messages.module.css'; // Adjust the path as needed

const Messages = ({ messages, contactName }) => {
    return (
        <div className={styles.messagesContainer}>
            {messages.map((message, index) => (
                <div key={index} className={message.isUser ? styles.userMessage : styles.contactMessage}>
                    {message.text} {/* Ensure this is a string */}
                </div>
            ))}
        </div>
    );
};

export default Messages;
