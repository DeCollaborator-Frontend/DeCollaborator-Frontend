import React from "react";
import Chat from "./Chat";

const ChatsList = ({ selectedChat, onToggleSelectChat }) => {
  return (
    <div className="grid h-full  gap-4 overflow-auto pr-5">
      {Array.from({ length: 10 }, (_, i) => (
        <Chat
          onToggleSelectChat={onToggleSelectChat}
          key={i}
          id={i}
          selectedChat={selectedChat}
        />
      ))}
    </div>
  );
};

export default ChatsList;
