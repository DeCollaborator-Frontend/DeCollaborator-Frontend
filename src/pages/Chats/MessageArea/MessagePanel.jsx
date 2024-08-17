import React from "react";
import Message from "./Message";
import MessagesList from "./MessagesList";

const MessagePanel = () => {
  return (
    <div className="overflow-auto p-5">
      <MessagesList />
    </div>
  );
};

export default MessagePanel;
