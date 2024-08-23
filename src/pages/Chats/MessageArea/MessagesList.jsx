import React from "react";
import Message from "./Message";

const MessagesList = ({ onCloseEmojiPicker, messages }) => {
  return (
    <div
      onClick={onCloseEmojiPicker}
      className="overflow-auto border-b-[1px] border-neutral-700 p-5"
    >
      {messages.map((message) => (
        <Message
          key={message.id}
          id={message.id}
          type={message.type}
          content={message.content}
          senderId={message.senderId}
        />
      ))}
    </div>
  );
};

export default MessagesList;
