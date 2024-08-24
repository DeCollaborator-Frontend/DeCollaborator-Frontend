import Chat from "./Chat";
import ChatsList from "./ChatsList";
import { useChats } from "@/contexts/useChats";

const TeamChatsList = () => {
  const { selectedChatsCategory } = useChats();

  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <ChatsList>
        {Array.from({ length: 2 }, (_, i) => (
          <Chat
            type="multi"
            key={i}
            id={i}
            selectedChatsCategory={selectedChatsCategory}
          />
        ))}
      </ChatsList>
    </div>
  );
};

export default TeamChatsList;
