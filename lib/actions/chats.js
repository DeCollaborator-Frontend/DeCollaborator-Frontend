import axios from "axios";

const { VITE_BASE_URL: baseUrl } = import.meta.env;

async function getUser(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/users/${id}`);

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getGroup(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/groups/${id}`);

    // console.log(data);

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getTeam(id) {
  try {
    const { data } = await axios.get(`${baseUrl}/teams/${id}`);

    console.log({ data });

    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getAllUserChats(userId) {
  try {
    const { data: allChats } = await axios.get(`${baseUrl}/chats`);

    const allUserChats = allChats.filter((chat) =>
      chat.participants?.includes(userId),
    );

    return allUserChats;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getUserChats(chatType, userId) {
  try {
    const allUserChats = await getAllUserChats(userId);

    const userChats = allUserChats?.filter(
      (chat) => chat.chatType === chatType,
    );

    return userChats;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function createChat(id, chatType, participants, groupId = null) {
  try {
    const newChat = { id, chatType, participants, groupId };

    const res = await axios.post(`${baseUrl}/chats`, newChat);

    console.log(res);
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getFriends(userId) {
  try {
    const { data: user } = await axios.get(`${baseUrl}/users/${userId}`);
    const friendsIds = user.friends;

    const friends = await Promise.all(
      friendsIds.map(async (id) => {
        const { data: friend } = await axios.get(`${baseUrl}/users/${id}`);

        return friend;
      }),
    );

    return friends;
  } catch (error) {
    console.error(error);
  }
}

async function getChatMessages(chatId) {
  try {
    const { data: allMessages } = await axios.get(`${baseUrl}/messages`);
    const messages = allMessages.filter((msg) => msg.chatId === chatId);

    return messages;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}
async function getChatSummary(chatId, chatType, currentUser) {
  let summary;

  try {
    if (chatType === "private") {
      const receiverUser = chatId.split("__")[1];

      const receiverUserData = await getUser(receiverUser);
      const receiverUserMessages = await getChatMessages(chatId);

      summary = {
        id: chatId,
        receiverUserData,
        chatType,
        lastMessage: receiverUserMessages.at(-1),
      };
    }

    return summary;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}
async function getAllUserChatsSummary(chatType, currentUser) {
  try {
    const allUserChats = await getAllUserChats(currentUser);

    const detailedChats = await Promise.all(
      allUserChats.map(async (chat) => {
        if (chat.chatType === "private") {
          const receiverUser = chat.participants.find(
            (userId) => userId !== currentUser,
          );

          const receiverUserData = await getUser(receiverUser);
          const receiverUserMessages = await getChatMessages(chat.id);

          return {
            id: chat.id,
            receiverUserData,
            chatType,
            lastMessage: receiverUserMessages.at(-1),
          };
        }
        // else if (chat.chatType === "collab") {
        // }
      }),
    );

    const detailedChatsSorted = detailedChats.sort(
      (a, b) => new Date(b.lastMessage.sentAt) - new Date(a.lastMessage.sentAt),
    );

    return detailedChatsSorted;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
}

async function postMessage(message) {
  const newMessage = {
    ...message,
  };
  try {
    const res = await axios.post(`${baseUrl}/messages`, newMessage);

    return res;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function getUserData(userId) {
  // Assume you have fetched `chats`, `messages`, `groups`, and `teams` data
  let userData = {};

  try {
    const { data: allChats } = await axios.get(`${baseUrl}/chats`);
    const { data: allMessages } = await axios.get(`${baseUrl}/messages`);
    const { data: allGroups } = await axios.get(`${baseUrl}/groups`);
    const { data: allTeams } = await axios.get(`${baseUrl}/teams`);

    const userChats = allChats.filter((chat) =>
      chat.participants.includes(userId),
    );
    const userMessages = allMessages.filter((msg) => {
      const messageChat = userChats.find((chat) => chat.id === msg.chatId);

      if (messageChat.participants.includes(userId)) return msg;
    });
    const userGroups = allGroups.filter((group) =>
      group.participants.includes(userId),
    );
    const userTeams = allTeams.filter((team) =>
      team.groups.some((group) => userGroups.includes(group)),
    );
    // const userTeamsGroups = userTeams.reduce((acc, cur) => {
    //     return
    // }, {});

    userData = { userChats, userMessages, userGroups, userTeams };

    return userData;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }

  //   Derive user data from fetched data
  const userChats = chats.filter((chat) => chat.participants.includes(userId));

  const userMessages = messages.filter((message) =>
    userChats.some((chat) => chat.chatId === message.chatId),
  );
  const userGroups = groups.filter((group) =>
    group.participants.includes(userId),
  );
  const userTeamIds = userGroups
    .map((group) => group.teamId)
    .filter((teamId) => teamId !== null);
  const userTeams = teams.filter((team) => userTeamIds.includes(team.teamId));
  const userCollabChats = chats.filter(
    (chat) => chat.chatType === "collab" && chat.participants.includes(userId),
  );
  const collabGroupIds = userCollabChats.map((chat) => chat.groupId);
  const collabGroups = groups.filter((group) =>
    collabGroupIds.includes(group.groupId),
  );

  return {
    chats: userChats,
    messages: userMessages,
    groups: userGroups,
    teams: userTeams,
    collabGroups: collabGroups,
  };
}

export {
  getUserData,
  getUser,
  getGroup,
  getTeam,
  getUserChats,
  getAllUserChats,
  createChat,
  getChatMessages,
  postMessage,
  getFriends,
  getAllUserChatsSummary,
  getChatSummary,
};
