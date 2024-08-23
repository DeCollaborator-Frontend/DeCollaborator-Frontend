import React from "react";
import InitiateCollab from "../CreateChatButton";
import ChatsList from "./ChatsList";

const TeamChatsList = () => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <ChatsList />
    </div>
  );
};

export default TeamChatsList;
