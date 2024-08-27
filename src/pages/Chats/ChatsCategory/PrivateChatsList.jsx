import { useChats } from "@/contexts/useChats";
import NewChatButton from "../CreateChatButton";
import ChatsList from "./ChatsList";
import Chat from "./Chat";
import { useState } from "react";
import { useParams } from "react-router-dom";

const privateChats = [
  {
    chatName: "John Doe",
    chatId: "private_chat_001",
    lastMessage: "Hey, are we still on for tonight?",
    lastMessageSentAt: "2024-08-26T15:34:00Z",
  },
  {
    chatName: "Jane Smith",
    chatId: "private_chat_002",
    lastMessage: "Got the files you sent, thanks!",
    lastMessageSentAt: "2024-08-26T14:20:30Z",
  },
  {
    chatName: "Michael Johnson",
    chatId: "private_chat_003",
    lastMessage: "Let’s catch up this weekend.",
    lastMessageSentAt: "2024-08-25T19:05:10Z",
  },
  {
    chatName: "Emily Davis",
    chatId: "private_chat_004",
    lastMessage: "I’ll call you in a bit.",
    lastMessageSentAt: "2024-08-26T08:15:45Z",
  },
  {
    chatName: "Chris Lee",
    chatId: "private_chat_005",
    lastMessage: "Did you finish the report?",
    lastMessageSentAt: "2024-08-26T12:50:00Z",
  },
];

const PrivateChatsList = () => {
  const { chatId } = useParams();
  // const [selectedChat, setSelectedChat] = useState(chatId);

  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <NewChatButton />
      <ChatsList>
        {privateChats.map((chat) => (
          <Chat chat={chat} type="single" key={chat.chatId} id={chat.chatId} />
        ))}
      </ChatsList>
    </div>
  );
};

export default PrivateChatsList;
