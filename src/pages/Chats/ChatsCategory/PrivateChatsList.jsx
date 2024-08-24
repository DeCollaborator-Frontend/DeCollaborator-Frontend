import { useChats } from "@/contexts/useChats";
import NewChatButton from "../CreateChatButton";
import ChatsList from "./ChatsList";
import Chat from "./Chat";

const PrivateChatsList = () => {
  const { selectedChatsCategory } = useChats();

  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <NewChatButton />
      <ChatsList>
        {Array.from({ length: 4 }, (_, i) => (
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

export default PrivateChatsList;
