import React, { useState } from "react";

export default function MessageInput({ sendMessage }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  return (
    <div className="flex p-2 border-t">
      <input
        className="flex-1 border rounded px-3 py-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}
