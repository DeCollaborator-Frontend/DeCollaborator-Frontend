import NewChatButton from "../CreateChatButton";
import ChatsList from "./ChatsList";

const PrivateChatsList = () => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden p-5">
      <NewChatButton />
      <ChatsList />
    </div>
  );
};

export default PrivateChatsList;
