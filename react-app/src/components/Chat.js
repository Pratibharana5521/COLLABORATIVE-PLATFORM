import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import './chat.css';
import Navbar from "./Navbar";
import Navlogin from "./Navlogin";
import Footer from "./Footer";
import NavC from "./NavC";
import Login from '../pages/Login';
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
        <div className="chat">
            {localStorage.getItem('token') ? <NavC /> : <Login />}
            <div className="chat-container">
                <div className="chat-box">
                    {chat.map((msg, index) => (
                        <p key={index}><strong>{msg.sender}:</strong> {msg.text} <small>{msg.timestamp}</small></p>
                    ))}
                </div>

                <div class="sent">
                    <div>
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type a message..."
                            className="ph"
                        />
                    </div>
                    <div>
                        <button className="btn" onClick={sendMessage}><img src="/paper-plane-solid.svg" /></button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}
