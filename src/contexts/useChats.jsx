import { createContext, useContext, useState } from "react";

const initialChats = [
  {
    category: "collab",
    name: "Web3 Product Application",
    chatId: "chat1",
    members: ["user1", "user2", "user3"],
  },
  {
    category: "collab",
    name: "Crypto Application",
    chatId: "chat2",
    members: ["user1", "user2", "user4"],
  },
  {
    category: "collab",
    name: "Mining for the rainy day",
    chatId: "chat3",
    members: ["user2", "user3", "user4"],
  },
  {
    category: "private",
    name: "Freeman",
    chatId: "chat01",
  },
  {
    category: "private",
    name: "Michael",
    chatId: "chat02",
  },
  {
    category: "private",
    name: "Wale senior designer",
    chatId: "chat03",
  },
  {
    category: "team",
    teamChatId: "team1",
    name: "Decollaborators",
    groups: [
      { name: "Developers", chatId: "chat3", members: [] },
      { name: "Developers", chatId: "chat3", members: [] },
    ],
  },
];

const ChatsContext = createContext();
const ChatsProvider = ({ children }) => {
  const [selectedChatsCategory, setSelectedChatsCategory] = useState("collab");
  const chatsCategories = ["collab", "team", "private"];
  const [chats, setChats] = useState([]);

  function handleSelectChatsCategory(id) {
    setSelectedChatsCategory(id);
  }

  return (
    <ChatsContext.Provider
      value={{
        selectedChatsCategory,
        setSelectedChatsCategory,
        onSelectChatsCategory: handleSelectChatsCategory,
        chatsCategories,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};

const useChats = () => {
  const context = useContext(ChatsContext);

  if (context === undefined)
    return console.log("Chats context used outside its provider");

  return context;
};

export { ChatsProvider, useChats };
