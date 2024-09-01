import NavBar from "../NavBar";
import ChatsSelect from "./ChatsSelect";
import CollabChatsList from "./CollabChatsList";
import TeamChatsList from "./TeamChatsList";
import PrivateChatsList from "./PrivateChatsList";
import { Outlet, useNavigate } from "react-router-dom";
import { useChats } from "@/contexts/useChats";
import { encryptKey } from "/lib/utils";

const Chats = () => {
  const { selectedChatsCategory, chatsCategories, currentUser } = useChats();
  const { chats, setChats } = useChats();

  const navigate = useNavigate();

  let collabChats = chats?.filter(({ chatType }) => chatType === "collab");
  let privateChats = chats?.filter(({ chatType }) => chatType === "private");
  let groupChats = chats?.filter(({ chatType }) => chatType === "group");
  let teamChats = groupChats?.filter((group) => group.isSubChat);

  function handleInitiateChat(recipient) {
    const encryptedComposedChatId = encryptKey(
      `${currentUser}__${recipient.id}`,
    );

    if (
      selectedChatsCategory === "collab" ||
      selectedChatsCategory === "private"
    )
      navigate(`/chats/${selectedChatsCategory}/${encryptedComposedChatId}`);
  }

  return (
    <div
      className="h-screen bg-neutral-900 text-white"
      style={{ display: "grid", gridTemplateColumns: "auto 380px 1fr" }}
    >
      <NavBar />
      <ChatsSelect>
        {selectedChatsCategory === chatsCategories[0].name && (
          <CollabChatsList
            onInitiateChat={handleInitiateChat}
            chats={collabChats}
          />
        )}
        {selectedChatsCategory === chatsCategories[1].name && (
          <TeamChatsList
            onInitiateChat={handleInitiateChat}
            chats={teamChats}
          />
        )}
        {selectedChatsCategory === chatsCategories[2].name && (
          <PrivateChatsList
            onInitiateChat={handleInitiateChat}
            chats={privateChats}
          />
        )}
      </ChatsSelect>
      <Outlet />
    </div>
  );
};

export default Chats;
