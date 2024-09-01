import Topbar from "./Topbar";
import MessageInput from "./MessageInput";
import MessagesList from "./MessagesList";

const conversations = [
  {
    conversationId: "conv123",
    messages: [
      {
        id: "1",
        senderId: "user123",
        type: "text",
        content:
          "Hey there! I’ve been meaning to catch up with you. It’s been a while since we last spoke. How have you been?",
        sentAt: "2024-08-22T10:15:00Z",
      },
      {
        id: "2",
        senderId: "user456",
        type: "text",
        content:
          "Hi! I’m doing well, thanks for asking. Life’s been hectic, but I can’t complain. What’s new with you?",
        sentAt: "2024-08-22T10:18:00Z",
      },
      {
        id: "3",
        senderId: "user123",
        type: "text",
        content:
          "That sounds amazing! I’ve been thinking about picking up a new hobby myself. Work has been really intense lately, and I could use something relaxing. Maybe I’ll try reading more fiction – I’ve been stuck in non-fiction books for too long.",
        sentAt: "2024-08-22T10:22:00Z",
      },
      {
        id: "4",
        senderId: "user456",
        type: "text",
        content:
          "Reading fiction is a great way to unwind! I recently finished a really gripping mystery novel. I could recommend a few if you’re interested. By the way, have you tried any new restaurants recently? I’m always on the lookout for good places to eat.",
        sentAt: "2024-08-22T10:25:00Z",
      },
      {
        id: "5",
        senderId: "user123",
        type: "text",
        content:
          "I’d love some recommendations! And yes, I tried a new Italian restaurant last week. It was fantastic. I’m thinking of going back this weekend. Let me know if you’d like to join.",
        sentAt: "2024-08-22T10:30:00Z",
      },
      {
        id: "6",
        senderId: "user456",
        type: "text",
        content:
          "I’d love to join! What time were you thinking of going? Also, I’ll send over that article I mentioned about time management.",
        sentAt: "2024-08-22T10:35:00Z",
      },
      {
        id: "7",
        senderId: "user123",
        type: "text",
        content:
          "Great! I was thinking around 7 PM. I look forward to it. Thanks for the article – I’ll check it out.",
        sentAt: "2024-08-22T10:40:00Z",
      },
      {
        id: "8",
        senderId: "user456",
        type: "text",
        content:
          "Perfect, I’ll see you then. If you need any more recommendations or have any questions, feel free to ask!",
        sentAt: "2024-08-22T10:45:00Z",
      },
      {
        id: "9",
        senderId: "user123",
        type: "text",
        content: "Will do. Talk soon!",
        sentAt: "2024-08-22T10:50:00Z",
      },
    ],
  },
  {
    conversationId: "conv456",
    messages: [
      {
        id: "1",
        senderId: "user123",
        type: "text",
        content: "Hello! Are you free to discuss the project plan?",
        sentAt: "2024-08-22T11:00:00Z",
      },
      {
        id: "2",
        senderId: "user789",
        type: "text",
        content:
          "Yes, let’s talk about it. I have some feedback ready. Can we meet later today?",
        sentAt: "2024-08-22T11:05:00Z",
      },
      {
        id: "3",
        senderId: "user123",
        type: "text",
        content: "Sure, I’m free this afternoon. What time works best for you?",
        sentAt: "2024-08-22T11:10:00Z",
      },
      {
        id: "4",
        senderId: "user789",
        type: "text",
        content: "How about 3 PM? I’ll send over the meeting invite.",
        sentAt: "2024-08-22T11:15:00Z",
      },
      {
        id: "5",
        senderId: "user123",
        type: "text",
        content: "3 PM works for me. Looking forward to it!",
        sentAt: "2024-08-22T11:20:00Z",
      },
      {
        id: "6",
        senderId: "user789",
        type: "document",
        content: "",
        src: "https://example.com/docs/project-plan.pdf",
        sentAt: "2024-08-22T11:25:00Z",
      },
      {
        id: "7",
        senderId: "user123",
        type: "text",
        content:
          "Received the document. I’ll review it before our meeting. Thanks!",
        sentAt: "2024-08-22T11:30:00Z",
      },
      {
        id: "8",
        senderId: "user789",
        type: "text",
        content: "No problem! If you have any questions, just let me know.",
        sentAt: "2024-08-22T11:35:00Z",
      },
      {
        id: "9",
        senderId: "user123",
        type: "text",
        content: "Will do. See you at 3!",
        sentAt: "2024-08-22T11:40:00Z",
      },
    ],
  },
];

const initialMessages = conversations[0].messages;

const MessageArea = () => {
  return (
    <main
      className="relative h-full overflow-hidden border-l border-neutral-700"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
      }}
    >
      <Topbar />
      <span className="absolute right-[50%] top-24 translate-x-[50%] rounded-[5px] bg-neutral-500 px-2 py-1 text-sm font-bold leading-none text-gray-900">
        TODAY
      </span>
      <MessagesList />
      <MessageInput />
    </main>
  );
};

export default MessageArea;
