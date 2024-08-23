const Message = ({ text, id, type, content, senderId }) => {
  const userId = "user123";

  const isOwnMessage = senderId === userId;
  return (
    <div className={`flex py-3 ${isOwnMessage ? "justify-end" : ""}`}>
      <div
        className={`w-fit max-w-lg rounded-xl p-4 ${isOwnMessage ? "bg-yellow-500" : "bg-neutral-800"}`}
      >
        {type === "text" && content}
      </div>
    </div>
  );
};

export default Message;
