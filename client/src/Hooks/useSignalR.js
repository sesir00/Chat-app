// src/hooks/useSignalR.js
import { useEffect, useState, useRef } from "react";
import * as signalR from "@microsoft/signalr";

export const useSignalR = (token) => {
  const [messages, setMessages] = useState([]);
  const connectionRef = useRef(null);

  useEffect(() => {
    if (!token) return;

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:5001/chatHub", {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();

    connection.start()
      .then(() => console.log("SignalR Connected"))
      .catch(err => console.error("Connection Error:", err));

    connection.on("ReceiveMessage", (message) => {
      setMessages(prev => [...prev, message]);
    });

    connectionRef.current = connection;

    return () => {
      connection.stop();
    };
  }, [token]);

  const sendMessage = (text) => {
    if (connectionRef.current) {
      connectionRef.current.invoke("SendMessage", text);
    }
  };

  return { messages, sendMessage };
};
