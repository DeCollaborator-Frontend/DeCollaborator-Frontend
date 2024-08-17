import React from "react";
import InitiateCollab from "./InitiateCollab";
import ChatsList from "./ChatsList";

const CollabChatsList = ({ onToggleSelectChat, selectedChat }) => {
  return (
    <div className="flex h-full flex-col gap-6 overflow-hidden p-5">
      <InitiateCollab />
      <ChatsList
        selectedChat={selectedChat}
        onToggleSelectChat={onToggleSelectChat}
      />
    </div>
  );
};

export default CollabChatsList;
