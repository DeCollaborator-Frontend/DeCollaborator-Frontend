import React from "react";
import Topbar from "./Topbar";
import MessagePanel from "./MessagePanel";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";

const MessageArea = () => {
  return (
    <main
      className="h-full overflow-hidden border-l border-neutral-700"
      style={{ display: "grid", gridTemplateRows: "auto 1fr auto" }}
    >
      <Topbar />
      <MessagesList />
      <MessageInput />
    </main>
  );
};

export default MessageArea;
