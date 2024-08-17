import React from "react";
import Message from "./Message";

const MessagesList = () => {
  return (
    <div className="border-b-1 overflow-auto border-neutral-500 p-5">
      <Message
        isOwnMessage={true}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis "
      />
      <Message
        isOwnMessage={true}
        text="unt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
nostrud exercitation ullamco laboris nis"
      />
      <Message
        isOwnMessage={false}
        text="ficia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molest"
      />
      <Message
        isOwnMessage={true}
        text="consectetur veniam similique ad 
earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
fugiat, dolorum eligendi quam cupiditate excepturi mollitia maior"
      />
      <Message
        isOwnMessage={false}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis "
      />
    </div>
  );
};

export default MessagesList;
