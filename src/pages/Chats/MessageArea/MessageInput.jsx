import React from "react";

const MessageInput = () => {
  return (
    <div className=" flex flex-col gap-6 px-8 py-6">
      <div className="flex items-center gap-4">
        <div className="h-5 w-5 rounded-full bg-neutral-500"></div>
        <div className="h-5 w-5 rounded-full bg-neutral-500"></div>
        <div className="h-5 w-5 rounded-full bg-neutral-500"></div>
        <div className="h-5 w-5 rounded-full bg-neutral-500"></div>
      </div>
      <div className="flex justify-between">
        <input
          className=" w-full border-0 border-none bg-transparent outline-none"
          type="text"
          placeholder="Type a message..."
        />
        <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
      </div>
    </div>
  );
};

export default MessageInput;
