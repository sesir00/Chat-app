import React from "react";
import MessageItem from "./MessageItem";

export default function MessageList({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2">
      {messages.map((msg, idx) => (
        <MessageItem key={idx} message={msg} />
      ))}
    </div>
  );
}
