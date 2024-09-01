import InitiateCollabButton from "../CreateChatButton";
import ChatsList from "./ChatsList";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import { useChats } from "@/contexts/useChats";
// import { getChats } from "/lib/actions/chats";

// const collabChats = [
//   {
//     chatName: "Project Team",
//     chatId: "collab_chat_001",
//     lastMessage: "Don't forget the meeting tomorrow at 10 AM.",
//     lastMessageSentAt: "2024-08-26T15:34:00Z",
//   },
//   {
//     chatName: "Family Group",
//     chatId: "collab_chat_002",
//     lastMessage: "Dinner at grandma's place this weekend?",
//     lastMessageSentAt: "2024-08-26T14:20:30Z",
//   },
//   {
//     chatName: "Best Friends",
//     chatId: "collab_chat_003",
//     lastMessage: "Check out this new song!",
//     lastMessageSentAt: "2024-08-25T19:05:10Z",
//   },
//   {
//     chatName: "Work Updates",
//     chatId: "collab_chat_004",
//     lastMessage: "The latest report has been uploaded.",
//     lastMessageSentAt: "2024-08-26T08:15:45Z",
//   },
//   {
//     chatName: "Sports Club",
//     chatId: "collab_chat_005",
//     lastMessage: "Practice session rescheduled to 6 PM.",
//     lastMessageSentAt: "2024-08-26T12:50:00Z",
//   },
// ];

const CollabChatsList = () => {
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedChatsCategory, chatsCategories } = useChats();

  useEffect(() => {
    async function fetchChats() {
      try {
        setIsLoading(true);
        // const chats = await getChats(selectedChatsCategory);

        // setChats(chats);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchChats();
  }, [selectedChatsCategory]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex h-full flex-col gap-6 overflow-hidden p-5">
      <InitiateCollabButton />
      <ChatsList>
        {chats.map((chat) => (
          <Chat chat={chat} type="single" key={chat.id} id={chat.id} />
        ))}
      </ChatsList>
    </div>
  );
};

export default CollabChatsList;
