import React, { useState } from "react";

const TeamOverview = ({ overview }) => {
  console.log(overview);
  const [text, setText] = useState(overview);
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
