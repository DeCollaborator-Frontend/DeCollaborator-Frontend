import React from "react";

const CollabDetailsForm = () => {
  return (
    <>
      <p className="text-[#E8E1DC] text-center font-bold text-[20px]">
        Collab Details
      </p>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="grid grid-cols-3">
          <div className="rounded-lg bg-[#242222] p-3 m-5">
            <label htmlFor="type" className="text-white font-bold mb-2">
              Collab Type:
            </label>
            <select
              id="type"
              className="bg-transparent border border-[#525252] focus:outline-none text-white text-base rounded block w-full p-2 mt-2"
            >
              <option selected className="bg-[#0F0F0F] text-base">
                Select Industry
              </option>
              <option value="1" className="bg-[#0F0F0F] text-base">
                Tech
              </option>
              <option value="2" className="bg-[#0F0F0F] text-base">
                Entertainment
              </option>
              <option value="3" className="bg-[#0F0F0F] text-base">
                Fashion
              </option>
              <option value="4" className="bg-[#0F0F0F] text-base">
                Finance
              </option>
              <option value="5" className="bg-[#0F0F0F] text-base">
                Others
              </option>
            </select>
          </div>
          <div className="rounded-lg bg-[#242222] p-3 m-5">
            <label htmlFor="title" className="text-white font-bold">
              Collab Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="p-2 w-full mt-2 bg-transparent border border-[#525252] rounded-md focus:outline-none placeholder:text-sm text-white autofill:bg-transparent"
            />
          </div>
          <div className="rounded-lg bg-[#242222] p-3 m-5 flex flex-col">
            <p className="text-white font-bold mb-2">Send a File</p>
            <label
              htmlFor="file"
              className="p-2 w-full bg-transparent border border-[#525252] rounded-md focus:outline-none text-white text-center"
            >
              Add a file
            </label>
            <input type="file" name="file" id="file" className="hidden" />
          </div>
        </div>
        <div className="rounded-lg bg-[#242222] p-3 mx-5 flex flex-col">
          <label htmlFor="description" className="text-white font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            className="bg-transparent border-[#525252] border rounded-md focus:outline-none text-white p-2"
          ></textarea>
        </div>
        <div className="m-5">
          <button className="new border rounded-md px-5 py-2 w-max focus:outline-none font-bold">
            Discard
          </button>
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded-md px-5 py-2 w-max focus:outline-none font-bold ml-3"
            type="submit"
          >
            Send Proposal
          </button>
        </div>
      </form>
    </>
  );
};

export default CollabDetailsForm;

export const CollabContactDetails = () => {
  return (
    <>
      <div className="text-white bg-[#242222] p-5 rounded-lg text-base flex justify-between items-center w-[80%] m-auto">
        <div>
          <div>
            <div className="flex justify-between items-center">
              <p>From: </p>
              <button className="bg-[#333333] rounded-lg py-0.5 px-1">
                Click here to select
              </button>
            </div>
            <div className="border-l-4 h-10 border-[#7F7F7F]"></div>
            {/* <svg
          width="12"
          height="47"
          viewBox="0 0 12 47"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative translate-y-[-10px] translate-x-[5px]"
          >
          <g opacity="0.9">
          <path
          d="M10 45V45C5.58172 45 2 41.4183 2 37L2 2.18164"
          stroke="#7F7F7F"
          stroke-width="3"
          stroke-miterlimit="0"
          stroke-linecap="round"
          stroke-linejoin="bevel"
          />
          </g>
        </svg> */}

            <div className="flex justify-between items-center">
              <p className="text-[#7F7F7F]">Sender:</p>
              <button className="bg-[#0F0F0F] rounded-lg py-0.5 px-1">
                Demitchy
              </button>
              {/* <p className="text-[#7F7F7F] absolute translate-x-[15px] translate-y-[-12px]">
            Sender:
          </p> */}
            </div>
          </div>
          <div className="mt-5">
            <div className="flex justify-between items-center">
              <p>To: </p>
              <button className="bg-[#333333] rounded-lg py-0.5 px-1">
                Click here to select
              </button>
            </div>
            <div className="border-l-4 h-10 border-[#7F7F7F]"></div>
            <div className="flex justify-between items-center">
              <p className="text-[#7F7F7F]">Receiver:</p>
              <button className="bg-[#333333] rounded-lg py-0.5 px-1">
                Select proposal receiver
              </button>
            </div>
          </div>
        </div>
        <div className="flex">
          <NoUser className={"relative z-10 translate-x-[-100px]"} />
          <NoUser className={"absolute"} />
        </div>
      </div>
    </>
  );
};

const NoUser = ({ className }) => {
  return (
    <svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="100"
        cy="100"
        r="99"
        fill="#FEFEFE"
        stroke="url(#paint0_linear_9841_74249)"
        stroke-width="2"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M66.6667 58.3333C66.6667 49.4928 70.1786 41.0143 76.4298 34.7631C82.681 28.5119 91.1594 25 100 25C108.841 25 117.319 28.5119 123.57 34.7631C129.821 41.0143 133.333 49.4928 133.333 58.3333C133.333 67.1739 129.821 75.6523 123.57 81.9036C117.319 88.1548 108.841 91.6667 100 91.6667C91.1594 91.6667 82.681 88.1548 76.4298 81.9036C70.1786 75.6523 66.6667 67.1739 66.6667 58.3333ZM66.6667 108.333C55.616 108.333 45.0179 112.723 37.2039 120.537C29.3899 128.351 25 138.949 25 150C25 156.63 27.6339 162.989 32.3223 167.678C37.0107 172.366 43.3696 175 50 175H150C156.63 175 162.989 172.366 167.678 167.678C172.366 162.989 175 156.63 175 150C175 138.949 170.61 128.351 162.796 120.537C154.982 112.723 144.384 108.333 133.333 108.333H66.6667Z"
        fill="#333333"
      />
      <defs>
        <linearGradient
          id="paint0_linear_9841_74249"
          x1="200"
          y1="100.213"
          x2="-1.09658e-06"
          y2="100.213"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFDF00" />
          <stop offset="0.276042" stop-color="#F6D108" />
          <stop offset="0.541667" stop-color="#EDC211" />
          <stop offset="0.776042" stop-color="#E3B419" />
          <stop offset="1" stop-color="#DAA521" />
        </linearGradient>
      </defs>
    </svg>
  );
};
