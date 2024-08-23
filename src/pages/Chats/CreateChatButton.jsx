import { useChats } from "@/contexts/useChats";
import { FaPlus } from "react-icons/fa";
import { TiMessage } from "react-icons/ti";

const CreateChatButton = () => {
  const { selectedChatsCategory, chatsCategories } = useChats();
  let icon, text;

  switch (selectedChatsCategory) {
    case chatsCategories[0].name:
      text = "Initiate collab";
      icon = chatsCategories[0].icon;
      break;
    case chatsCategories[2].name:
      text = "New chat";
      icon = chatsCategories[2].icon;
      break;
    default:
      break;
  }

  return (
    <button className="relative flex items-center justify-center rounded-xl bg-neutral-800 p-5">
      <div className="absolute left-3 rounded-lg border-2 border-yellow-500 p-2">
        <span>{icon}</span>
        <span className="absolute bottom-0 right-0 translate-x-[50%] translate-y-[50%] rounded-full border-2 border-yellow-500 bg-neutral-800 p-[3px]">
          <FaPlus className="h-2 w-2" />
        </span>
      </div>
      <span className="font-bold">{text}</span>
    </button>
  );
};

export default CreateChatButton;
