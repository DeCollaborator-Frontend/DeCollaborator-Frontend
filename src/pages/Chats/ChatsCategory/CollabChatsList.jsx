import React from "react";
import InitiateCollabButton from "../CreateChatButton";
import ChatsList from "./ChatsList";

const CollabChatsList = ({ onToggleSelectChat, selectedChat }) => {
  return (
    <div className="flex h-full flex-col gap-6 overflow-hidden p-5">
      <InitiateCollabButton />
      <ChatsList
        selectedChat={selectedChat}
        onToggleSelectChat={onToggleSelectChat}
      />
    </div>
  );
};

export default CollabChatsList;
