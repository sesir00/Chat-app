import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "system", text: "Welcome to the chat!" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, sender: "you", text: input },
    ]);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl bg-white shadow-md rounded-lg flex flex-col h-[70vh]">
      {/* Messages area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "you" ? "justify-end" : "justify-start"
            }`}
          >
            <span
              className={`px-3 py-2 rounded-lg ${
                msg.sender === "you"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input area */}
      <div className="flex p-3 border-t bg-gray-50">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2 mr-2 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
