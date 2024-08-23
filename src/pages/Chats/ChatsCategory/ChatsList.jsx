import Chat from "./Chat";
import { useChats } from "@/contexts/useChats";

const ChatsList = () => {
  const { selectedChatsCategory } = useChats();

  return (
    <div className="grid gap-4 overflow-auto pr-5">
      {Array.from({ length: 10 }, (_, i) => (
        <Chat key={i} id={i} selectedChatsCategory={selectedChatsCategory} />
      ))}
    </div>
  );
};

export default ChatsList;
