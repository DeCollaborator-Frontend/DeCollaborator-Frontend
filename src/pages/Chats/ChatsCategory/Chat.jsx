import { useChats } from "@/contexts/useChats";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Chat = ({ chat, id, type = "" }) => {
  const navigate = useNavigate();
  let { chatId: chatIdParam, communityId } = useParams();

  const { selectedChatsCategory } = useChats();

  let isSelected = chatIdParam === id;

  // if (type === "single") isSelected = chatIdParam === id;
  // if (type === "multi")
  //   isSelected = selectedChatsCategory === "team" && communityId === id;

  function handleToggleSelectChat(chatId = "") {
    if (type === "single")
      isSelected
        ? navigate(`/chats`)
        : navigate(`/chats/${selectedChatsCategory}/${id}`);
    if (type === "multi")
      isSelected
        ? navigate(`/chats`)
        : navigate(`/chats/${selectedChatsCategory}/${id}/${chatId}`);

    console.log(communityId, id);
  }

  if (type === "single")
    return (
      <SingleChat
        onToggleSelectChat={handleToggleSelectChat}
        isSelected={isSelected}
        chat={chat}
      />
    );
  if (type === "multi")
    return (
      <MultiChat
        // onToggleSelectChat={handleToggleSelectChat}
        chat={chat}
      />
    );
};

function MultiChat({ chat }) {
  // const [selectedChildChat, setSelectedChildChat] = useState(null);
  const navigate = useNavigate();

  let { chatId: chatIdParam, communityId } = useParams();

  let isSelected = communityId === chat.chatId;

  const { selectedChatsCategory } = useChats();

  function handleToggleSelectChat(childChat) {
    chatIdParam === childChat.chatId
      ? navigate(`/chats`)
      : navigate(
          `/chats/${selectedChatsCategory}/${chat.chatId}/${childChat.chatId}`,
        );
  }

  return (
    <div
      className={`${isSelected ? "border border-yellow-500 bg-neutral-600" : "bg-neutral-800"} rounded-lg`}
    >
      <div className="flex items-center gap-2 p-3">
        <div
          className={`h-8 w-8 rounded-full ${isSelected ? "bg-neutral-400" : "bg-neutral-600"}`}
        ></div>
        <h4 className="text-xl font-bold leading-5 text-yellow-500">
          {chat.chatName}
        </h4>
      </div>
      <div className="h-[1px] bg-neutral-400"></div>
      <div className="p-3">
        {chat.subChats.map((ch) => (
          <SingleChat
            key={ch.chatId}
            onToggleSelectChat={() => handleToggleSelectChat(ch)}
            chat={ch}
            selectedChildChat={chatIdParam}
            isSelected={ch.chatId === chatIdParam}
          />
        ))}
      </div>
    </div>
  );
}

function SingleChat({
  onToggleSelectChat,
  isSelected,
  chat,
  selectedChildChat = "",
}) {
  const { selectedChatsCategory, chatsCategories } = useChats();
  let isTeam = selectedChatsCategory === chatsCategories[1].name;

  return (
    <div
      onClick={() => onToggleSelectChat()}
      className={
        isTeam
          ? isSelected
            ? `cursor-pointer border-l-4 border-yellow-400`
            : "cursor-pointer py-2"
          : `cursor-pointer rounded-xl ${isSelected ? "bg-neutral-600" : "bg-neutral-800"} p-2`
      }
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: ".7rem",
        }}
      >
        <div
          className={`h-8 w-8 rounded-full ${isSelected ? "bg-neutral-400" : "bg-neutral-600"}`}
        ></div>
        <div>
          <div className="flex items-center gap-3">
            <span className=" mr-auto font-bold text-yellow-400">
              {chat.chatName}...
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <span className="text-sm">
              {new Date(chat.lastMessageSentAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          {!isTeam && (
            <div className="py-2">
              <div
                style={{
                  height: ".2px ",
                  backgroundColor: "rgba(255 255 255 /.2)",
                }}
              ></div>
            </div>
          )}
          <p className="text-sm">
            {chat.lastMessage.slice(0, 30)}
            {chat.lastMessage.length >= 30 && "..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
