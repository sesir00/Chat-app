import React from "react";

export default function MessageItem({ message }) {
  return (
    <div className={`p-2 rounded-md max-w-xs ${message.isMine ? "bg-blue-500 text-white ml-auto" : "bg-gray-200 text-black"}`}>
      {message.text}
    </div>
  );
}
