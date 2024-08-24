import { useChats } from "@/contexts/useChats";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Chat = ({ chat = "", id, type = "" }) => {
  const navigate = useNavigate();
  let { chatId } = useParams();
  chatId = Number(chatId);

  const { selectedChatsCategory, chatsCategories } = useChats();

  const isSelected = chatId === id;
  // const isSelected =
  //   selectedChatsCategory !== "team" ? chatId === id : groupId === id;

  function handleToggleSelectChat(chatId) {
    if (selectedChatsCategory !== "team")
      isSelected
        ? navigate(`/chats`)
        : navigate(`/chats/${selectedChatsCategory}/${id}`);
    else
      isSelected
        ? navigate(`/chats`)
        : navigate(`/chats/${selectedChatsCategory}/${id}/${chatId}`);
  }

  if (type === "single")
    return (
      <SingleChat
        onToggleSelectChat={handleToggleSelectChat}
        isSelected={isSelected}
      />
    );
  if (type === "multi")
    return (
      <MultiChat
        onToggleSelectChat={handleToggleSelectChat}
        isSelected={isSelected}
      />
    );
  // if (
  //   selectedChatsCategory === chatsCategories[0].name ||
  //   selectedChatsCategory === chatsCategories[2].name
  // )
  //   return (
  //     <SingleChat
  //       onToggleSelectChat={handleToggleSelectChat}
  //       isSelected={isSelected}
  //     />
  //   );
  // else
  //   return (
  //     <MultiChat
  //       onToggleSelectChat={handleToggleSelectChat}
  //       isSelected={isSelected}
  //     />
  //   );
};

function MultiChat({ onToggleSelectChat, isSelected }) {
  const { selectedChatsCategory } = useChats();
  return (
    <div
      // onClick={onToggleSelectChat}
      className={`${isSelected ? "border border-yellow-500 bg-neutral-600" : "bg-neutral-800"} cursor-pointer rounded-lg`}
    >
      <div className="flex items-center gap-2 p-3">
        <div
          className={`h-8 w-8 rounded-full ${isSelected ? "bg-neutral-400" : "bg-neutral-600"}`}
        ></div>
        <h4 className="text-xl font-bold leading-5 text-yellow-500">
          Team title
        </h4>
      </div>
      <div className="h-[1px] bg-neutral-400"></div>
      <div className="p-3">
        {Array.from({ length: 4 }).map((el, i) => (
          <SingleChat
            onToggleSelectChat={() => onToggleSelectChat(i)}
            teamChat={selectedChatsCategory === "team"}
            isSelected={isSelected}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

function SingleChat({ teamChat = false, onToggleSelectChat, isSelected }) {
  const { selectedChatsCategory, chatsCategories } = useChats();
  let isTeam = selectedChatsCategory === chatsCategories[1].name;

  return (
    <div
      onClick={onToggleSelectChat}
      className={
        isTeam
          ? "py-2"
          : `cursor-pointer rounded-xl ${isSelected ? "bg-neutral-600" : "bg-neutral-800"} p-2`
      }
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: ".7rem",
        }}
      >
        <div
          className={`h-8 w-8 rounded-full ${isSelected ? "bg-neutral-400" : "bg-neutral-600"}`}
        ></div>
        <div>
          <div className="flex items-center gap-3">
            <span className=" mr-auto font-bold text-yellow-400">
              Web3 Product Appli...
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <span className="text-sm">19:00</span>
          </div>
          {!isTeam && (
            <div className="py-2">
              <div
                style={{
                  height: ".2px ",
                  backgroundColor: "rgba(255 255 255 /.2)",
                }}
              ></div>
            </div>
          )}
          <p className="text-sm">~Okay bears: Lorem ipsum </p>
        </div>
      </div>
    </div>
  );
}

export default Chat;
