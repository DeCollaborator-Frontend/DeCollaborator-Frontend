import React from "react";

const Chat = ({ selectedChat, onToggleSelectChat, chat = "", id }) => {
  const isSelected = selectedChat === id;

  return (
    <div
      onClick={() => onToggleSelectChat(id)}
      className={`cursor-pointer rounded-xl ${isSelected ? "bg-neutral-600" : "bg-neutral-800"} p-2`}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr",
          gap: ".7rem",
        }}
      >
        {isSelected && (
          <div className="h-8 w-8 rounded-full bg-neutral-400"></div>
        )}
        {!isSelected && (
          <div className="h-8 w-8 rounded-full bg-neutral-600"></div>
        )}
        <div>
          <div className="flex items-center gap-3">
            <span className=" mr-auto font-bold text-yellow-400">
              Web3 Product Appli...
            </span>
            <span className="h-1 w-1 rounded-full bg-neutral-300"></span>
            <span className="text-sm">19:00</span>
          </div>
          <div className="py-2">
            <div
              style={{
                height: ".2px ",
                backgroundColor: "rgba(255 255 255 /.2)",
              }}
            ></div>
          </div>
          <p className="text-sm">~Okay bears: Lorem ipsum </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
