import React, { useState } from "react";
import MessageArea from "./MessageArea/MessageArea";
import NavBar from "./NavBar";
import CollabChatSelect from "./CollabChatsList";
import TeamChatsSelect from "./TeamChatsList";
import PrivateChatsSelect from "./PrivateChatsList";
import ChatsSelect from "./ChatsSelect";
import CollabChatsList from "./CollabChatsList";
import TeamChatsList from "./TeamChatsList";
import PrivateChatsList from "./PrivateChatsList";

const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(2);
  const [selectedChatsCategory, setSelectedChatsCategory] = useState(0);

  function handleToggleSelectChat(id) {
    setSelectedChat((cur) => (cur === id ? null : id));
  }

  function handleSelectChatsCategory(id) {
    setSelectedChatsCategory(id);
  }

  return (
    <div
      className="h-screen bg-neutral-900 text-white"
      style={{ display: "grid", gridTemplateColumns: "auto auto 1fr" }}
    >
      <NavBar
        selectedChatsCategory={selectedChatsCategory}
        onSelectChatsCategory={handleSelectChatsCategory}
      />
      <ChatsSelect selectedChatsCategory={selectedChatsCategory}>
        {selectedChatsCategory === 0 && (
          <CollabChatsList
            selectedChat={selectedChat}
            selectedChatsCategory={selectedChatsCategory}
            onToggleSelectChat={handleToggleSelectChat}
          />
        )}
        {selectedChatsCategory === 1 && (
          <TeamChatsList
            selectedChat={selectedChat}
            selectedChatsCategory={selectedChatsCategory}
            onToggleSelectChat={handleToggleSelectChat}
          />
        )}
        {selectedChatsCategory === 2 && (
          <PrivateChatsList
            selectedChat={selectedChat}
            selectedChatsCategory={selectedChatsCategory}
            onToggleSelectChat={handleToggleSelectChat}
          />
        )}
      </ChatsSelect>

      {selectedChat !== null && <MessageArea />}
      {selectedChat === null && (
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
