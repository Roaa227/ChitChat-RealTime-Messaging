import React, { useState } from 'react';
import styles from './Chat.module.css';
import Messages from '../Messages/Messages'; 

const Chat = ({ messages, selectedContact, setMessages }) => {
    const [input, setInput] = useState('');

    const sendMessage = (e) => {
        e.preventDefault();
        if (input) {
            const newMessage = { text: input, isUser: true }; 
            setMessages((prevMessages) => [...prevMessages, newMessage]); 
            setInput(''); 
        }
    };

    return (
        <div className={styles.chatContainer}>
            <Messages messages={messages} contactName={selectedContact ? selectedContact.name : ''} />

            <form onSubmit={sendMessage} className={styles.chatForm}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message"
                    className={styles.chatInput}
                />
                <button type="submit" className={styles.chatButton}>
                    <i className="fa-solid fa-paper-plane" style={{ color: '#9049bf' }}></i>
                </button>
            </form>
        </div>
    );
};

export default Chat;
