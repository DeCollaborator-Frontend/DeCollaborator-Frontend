import React from "react";

const Message = ({ text, isOwnMessage }) => {
  return (
    <div className={`flex py-3 ${isOwnMessage ? "justify-end" : ""}`}>
      <div
        className={` w-fit max-w-lg rounded-xl p-4 ${isOwnMessage ? "bg-yellow-400 text-black" : "bg-neutral-800 text-white"}`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;
