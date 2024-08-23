import React, { useState } from "react";
import MessageArea from "../MessageArea/MessageArea";
import NavBar from "../NavBar";
import CollabChatSelect from "./CollabChatsList";
import TeamChatsSelect from "./TeamChatsList";
import PrivateChatsSelect from "./PrivateChatsList";
import ChatsSelect from "./ChatsSelect";
import CollabChatsList from "./CollabChatsList";
import TeamChatsList from "./TeamChatsList";
import PrivateChatsList from "./PrivateChatsList";
import { useParams } from "react-router-dom";
import { useChats } from "@/contexts/useChats";

const Chats = () => {
  let { chatId: selectedChat } = useParams();
  selectedChat = Number(selectedChat);

  const { selectedChatsCategory, chatsCategories } = useChats();

  return (
    <div
      className="h-screen bg-neutral-900 text-white"
      style={{ display: "grid", gridTemplateColumns: "auto auto 1fr" }}
    >
      <NavBar />
      <ChatsSelect selectedChatsCategory={selectedChatsCategory}>
        {selectedChatsCategory === chatsCategories[0].name && (
          <CollabChatsList />
        )}
        {selectedChatsCategory === chatsCategories[1].name && <TeamChatsList />}
        {selectedChatsCategory === chatsCategories[2].name && (
          <PrivateChatsList />
        )}
      </ChatsSelect>

      {!isNaN(selectedChat) && <MessageArea />}
      {isNaN(selectedChat) && (
        <div className="relative grid place-items-center border-l border-neutral-700 text-center">
          <div className="max-w-96">
            <div className="mx-auto mb-6 h-28 w-28 rounded-xl bg-neutral-700"></div>
            <h1 className="mb-2 text-2xl font-bold">DeCollaborator Chat</h1>
            <p className="text-sm leading-6 text-neutral-400">
              Welcome to our DeCollaborator Chat, a digital playground for you
              to connect, engage, and collaborate like never before
            </p>
          </div>
          <div className="absolute bottom-6 text-sm">End to end encrypted</div>
        </div>
      )}
    </div>
  );
};

export default Chats;
