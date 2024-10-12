import React, { useState } from "react";

const TeamPermissionSlider = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <div className="mb-5 rounded border-2 border-[#555555] bg-transparent text-white">
        <div
          className={`flex justify-between rounded px-3 py-2 hover:bg-[#555555]`}
        >
          <p>Lorem ipsum dolor sit amet.</p>
          <label className="relative inline-block h-6 w-12 cursor-pointer">
            <input
              type="checkbox"
              checked={isOn}
              onChange={toggleSwitch}
              className="h-0 w-0 opacity-0"
            />
            <span
              className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                isOn ? "bg-yellow-500" : "bg-gray-500"
              }`}
            />
            <span
              className={`absolute left-1 top-1 h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                isOn ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </label>
        </div>
      </div>
    </>
  );
};

export default TeamPermissionSlider;
