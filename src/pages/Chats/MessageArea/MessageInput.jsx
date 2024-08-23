import { useEffect, useRef, useState } from "react";

import { BsFillEmojiSmileFill } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";

import EmojiPicker from "emoji-picker-react";
import { Calendar } from "primereact/calendar";

const MessageInput = ({ chatCategory, onAddMessage, messages }) => {
  const [message, setMessage] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [date, setDate] = useState("");
  const [messageType, setMessageType] = useState("text");

  function handleToggle(setterFn) {
    switch (setterFn) {
      case setIsEmojiPickerOpen:
        setIsCalendarOpen(false);
        break;
      case setIsCalendarOpen:
        setIsEmojiPickerOpen(false);
        break;
      default:
        break;
    }
    setterFn((cur) => !cur);
  }

  const inputRef = useRef();

  function onSubmit(e) {
    if (!message) return;

    e.preventDefault();
    const newMessage = {
      content: message,
      type: messageType,
      id: messages.at(-1).id + 1,
      senderId: "user123",
      sentAt: new Date(),
    };
    onAddMessage(newMessage);
    setMessage("");
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form className=" relative flex flex-col gap-6 px-8 py-6">
      <div className="flex items-center gap-4">
        <button onClick={(e) => e.preventDefault()}>
          <BsFillEmojiSmileFill
            onClick={() => handleToggle(setIsEmojiPickerOpen)}
          />
          <div className="absolute left-3 top-[-12px] translate-y-[-100%]">
            <EmojiPicker
              theme="dark"
              lazyLoadEmojis={true}
              className={`transition-transform ${isEmojiPickerOpen ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-[30px] cursor-none opacity-0"}`}
              onEmojiClick={(e) => {
                console.log(e.emoji);
                setMessage((cur) => cur + e.emoji);
                inputRef.current.focus();
              }}
            ></EmojiPicker>
          </div>
        </button>
        <button onClick={(e) => e.preventDefault()}>
          <GrAttachment className="scale-x-[-1]" />
        </button>
        <button onClick={(e) => e.preventDefault()}>
          <FaCalendarAlt />
          <div className="absolute left-3 top-[-12px] translate-y-[-100%]">
            {/* <Calendar
              icon={<p>Icon</p>}
              value={date}
              onChange={(e) => setDate(e.value)}
            /> */}
          </div>
        </button>
      </div>
      <div className="flex justify-between">
        <input
          ref={inputRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onClick={() => setIsEmojiPickerOpen(false)}
          className="w-full border-0 border-none bg-transparent text-sm outline-none"
          type="text"
          placeholder="Type a message..."
        />
        <button onClick={onSubmit} className="rounded-full bg-yellow-500 p-2">
          <IoSend />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
