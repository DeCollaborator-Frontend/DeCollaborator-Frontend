import Chat from "./Chat";
import { useChats } from "@/contexts/useChats";

const ChatsList = ({ children }) => {
  return <div className="grid gap-4 overflow-auto pr-5">{children}</div>;
};

export default ChatsList;
