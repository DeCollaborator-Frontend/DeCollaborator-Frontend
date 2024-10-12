import React, { useState } from "react";

const TeamOverview = () => {
  const initialText =
    "Lorem ipsum dolor sit amet consectetur. Nisl leo pulvinar in nibh. Gravida at sed molestie lectus. Ac nullam tristique vel viverra. Urna cursus eu ullamcorper adipiscing pellentesque justo eu amet nulla. Interdum ipsum egestas consequat vel mauris ut. Etiam vitae et diam faucibus. At dui feugiat velit est. Turpis nec facilisis nunc leo tempus urna ultrices quis posuere. Sed sed phasellus maecenas pellentesque urna risus ante. Malesuada sed facilisis eget massa turpis in elementum orci at. Eu lectus commodo ipsum blandit diam sed est dictumst. Diam ultrices ut vel diam. Semper ac lorem cras donec duis magna. Commodo adipiscing maecenas scelerisque orci nunc pellentesque nisi. Egestas gravida tempor euismod amet integer condimentum. Netus egestas orci tortor laoreet ultricies urna sed mi. Purus purus porta a quam neque. Elit dictum viverra tempus purus ut scelerisque adipiscing mattis. Nunc consectetur odio sapien sed mauris amet a diam. Eu diam sed sed tellus sit egestas quam est. Scelerisque sed netus sem tellus ultrices lorem arcu at tortor. Senectus interdum ultrices nec vivamus sit risus enim. Eu amet nulla nunc donec sagittis pharetra porta.";
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(text);

  const handleEdit = () => {
    setTempText(text);
    setIsEditing(true);
  };

  const handleSave = () => {
    setText(tempText);
    setIsEditing(false);
  };

  const handleDiscard = () => {
    setTempText(text);
    setIsEditing(false);
  };

  return (
    <div className="mx-10 mx-auto mt-5 rounded-lg bg-[#262626] p-4">
      <h3 className="border-b-1 mb-5 border-[#a9a9a9] pb-2 text-xl font-bold text-[#fefefe]">
        Overview
      </h3>
      <textarea
        value={tempText}
        onChange={(e) => setTempText(e.target.value)}
        className={`h-72 w-full border p-2 ${isEditing ? "border-[#262626]" : "border-[#262626]"} rounded-md bg-transparent text-[#d4d4d4] transition-all duration-200 focus:outline-none`}
        readOnly={!isEditing}
      />
      <div className="mt-4 space-x-2">
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-1.5 text-lg font-bold text-[#0f0f0f]"
          >
            Edit Overview
          </button>
        ) : (
          <>
            <button
              onClick={handleSave}
              className="mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-1.5 text-lg font-bold text-[#0f0f0f]"
            >
              Update Overview
            </button>
            <button
              onClick={handleDiscard}
              className="mt-4 rounded border-2 border-[#FFDF00] bg-none p-1.5 text-lg font-bold text-[#FFDF00]"
            >
              Discard Changes
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TeamOverview;
