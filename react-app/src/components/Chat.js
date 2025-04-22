import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './chat.css';

const socket = io.connect("http://localhost:5050");

export default function Chat() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setChat((prevChat) => [...prevChat, data]);
        });

        return () => {
            socket.off("receive_message"); 
        };
    }, []);

    const sendMessage = () => {
        if (message.trim() !== "") {
            const chatMessage = { text: message, sender: "User", timestamp: new Date().toLocaleTimeString() };
            socket.emit("send_message", chatMessage);
            setMessage("");
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <p key={index}><strong>{msg.sender}:</strong> {msg.text} <small>{msg.timestamp}</small></p>
                ))}
            </div>
            <input 
                type="text" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}
