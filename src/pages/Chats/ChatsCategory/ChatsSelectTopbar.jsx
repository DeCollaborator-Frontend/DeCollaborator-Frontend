import { useChats } from "@/contexts/useChats";
import { useParams } from "react-router-dom";

function ChatsSelectTopbar() {
  const { selectedChatsCategory } = useChats();

  return (
    <div className="p-5">
      <h3 className="text-xl font-semibold">
        {selectedChatsCategory[0].toUpperCase() +
          selectedChatsCategory.slice(1)}{" "}
        chat
      </h3>
    </div>
  );
}

export default ChatsSelectTopbar;
