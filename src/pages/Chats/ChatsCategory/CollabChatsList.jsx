import InitiateCollabButton from "../CreateChatButton";
import ChatsList from "./ChatsList";
import Chat from "./Chat";
import { useChats } from "@/contexts/useChats";

const CollabChatsList = () => {
  const { selectedChatsCategory } = useChats();

  return (
    <div className="flex h-full flex-col gap-6 overflow-hidden p-5">
      <InitiateCollabButton />
      <ChatsList>
        {Array.from({ length: 8 }, (_, i) => (
          <Chat
            type="single"
            key={i}
            id={i}
            selectedChatsCategory={selectedChatsCategory}
          />
        ))}
      </ChatsList>
    </div>
  );
};

export default CollabChatsList;
