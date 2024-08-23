import { useChats } from "@/contexts/useChats";
import { Handshake } from "lucide-react";
import { TiMessage } from "react-icons/ti";

const CreateChatButton = () => {
  const { selectedChatsCategory, chatsCategories } = useChats();
  let { icon, text } = {};

  switch (selectedChatsCategory) {
    case chatsCategories[0]:
      icon = <Handshake className="text-neutral-400" />;
      text = "Initiate collab";
      break;
    case chatsCategories[2]:
      icon = <TiMessage className="text-neutral-400" />;
      text = "New chat";
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center rounded-xl bg-neutral-800 p-3">
      {/* <span className="h-10 w-10 rounded-full bg-neutral-700"></span> */}
      <span className="radius-[3px] border-2 border-yellow-500 p-1">
        {icon}
      </span>
      <span className="mx-auto font-bold">{text}</span>
    </div>
  );
};

export default CreateChatButton;
