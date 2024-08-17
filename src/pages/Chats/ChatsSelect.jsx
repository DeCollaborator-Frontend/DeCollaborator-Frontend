import React from "react";
import ChatsSelectTopbar from "./ChatsSelectTopbar";

const ChatsSelect = ({ selectedChatsCategory, children }) => {
  return (
    <div
      className="h-full overflow-hidden"
      style={{ display: "grid", gridTemplateRows: "auto 1fr" }}
    >
      <ChatsSelectTopbar selectedChatsCategory={selectedChatsCategory} />

      {children}
    </div>
  );
};

export default ChatsSelect;
