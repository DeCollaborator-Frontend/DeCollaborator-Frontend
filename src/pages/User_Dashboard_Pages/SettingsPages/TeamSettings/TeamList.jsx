import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeamList = () => {
  const teams = [
    {
      id: 1,
      teamName: "Team 1",
    },
    {
      id: 2,
      teamName: "Team 2",
    },
    {
      id: 3,
      teamName: "Team 3",
    },
  ];
  return (
    <>
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[30px] text-[#E8E1DC] lg:text-[56px]">
          Team Settings
        </h1>
        <p className="text-center text-[15px] text-[#959595] md:text-[20px]">
          Edit the settings and features available to your team members.
        </p>
      </div>
      <div className="px-10 md:px-28">
        <div className="rounded-xl border-4 border-[#242222] px-10 py-10 md:px-28">
          <div className="rounded-xl bg-[#262626] p-5">
            <div className="border-b-1 mb-5 border-[#a9a9a9] pb-2">
              <h3 className="text-xl font-bold text-[#fefefe]">Team List</h3>
              <p className="text-sm text-[#959595]">
                Manage your teams and their members
              </p>
            </div>
            {teams.map((team) => (
              <TeamData key={team.id} id={team.id} teamName={team.teamName} />
            ))}
            <div className="">
              <button className="mt-4 block rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-1 text-lg font-bold text-[#0f0f0f]">
                Create new team
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TeamData = ({ id, teamName }) => {
  console.log(id, teamName);
  return (
    <div>
      <div className="mb-5 rounded border-2 border-[#555555] bg-transparent text-white">
        <div
          className={`flex items-center justify-between rounded px-3 py-2 hover:bg-[#555555]`}
        >
          <p>{teamName}</p>
          <Link to={`/settings/teams/${id}`}>
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z"
                stroke="#FEFEFE"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.75 18H21.75"
                stroke="#FEFEFE"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.75 22.5L23.25 18L18.75 13.5"
                stroke="#FEFEFE"
                stroke-width="2.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamList;
