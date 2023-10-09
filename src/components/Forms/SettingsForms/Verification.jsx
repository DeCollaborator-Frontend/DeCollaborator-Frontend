export const Level1 = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg mt-10">
        <div>
          <h2 className="text-white text-[28px] font-bold">Level 1</h2>
          <p className="text-[#D4D4D4] mb-8  pb-2 border-[#A9A9A9] border-b">
            Email Verification
          </p>
        </div>
        <div className="flex justify-between text-white pr-32 pl-10">
          <label htmlFor="new">Email Address</label>
          <div className="p-2 bg-[#A9A9A9] border border-[#D4D4D4] rounded-md focus:outline-none text-[#333333] mb-5 w-[70%] font-bold">
            mitchellobiyor247@yaho.com
          </div>
        </div>
        <div className="flex justify-end pr-32">
          <button
            className="button-gradient border-2 border-[#FFD21D] rounded px-6 py-2 focus:outline-none font-bold mt-6"
            type="submit"
          >
            Verify
          </button>
        </div>
      </div>
    </>
  );
};
export const Level2 = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg mt-10">
        <div>
          <h2 className="text-white text-[28px] font-bold">Level 2</h2>
          <p className="text-[#D4D4D4] mb-8  pb-2 border-[#A9A9A9] border-b">
            Social Media Authentications
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between text-white pr-32 pl-10">
            <label htmlFor="new">Instagram</label>
            <div className="p-2 bg-[#A9A9A9] border border-[#D4D4D4] rounded-md focus:outline-none text-[#333333] mb-5 w-[70%] font-bold">
              https://www.instagram.com/de_mitchy
            </div>
          </div>
          <div className="flex justify-end pr-32">
            <button
              className="button-gradient border-2 border-[#FFD21D] rounded px-6 py-2 focus:outline-none font-bold mt-6"
              type="submit"
            >
              Verify
            </button>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-between text-white pr-32 pl-10">
            <label htmlFor="new">Twitter</label>
            <div className="p-2 bg-[#A9A9A9] border border-[#D4D4D4] rounded-md focus:outline-none text-[#333333] mb-5 w-[70%] font-bold">
              https://www.twitter.com/de_mitchy
            </div>
          </div>
          <div className="flex justify-end pr-32">
            <button
              className="button-gradient border-2 border-[#FFD21D] rounded px-6 py-2 focus:outline-none font-bold mt-6"
              type="submit"
            >
              Verify
            </button>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-between text-white pr-32 pl-10">
            <label htmlFor="new">LinkedIn</label>
            <div className="p-2 bg-[#A9A9A9] border border-[#D4D4D4] rounded-md focus:outline-none text-[#333333] mb-5 w-[70%] font-bold">
              https://www.linkedin.com/in/demitchy
            </div>
          </div>
          <div className="flex justify-end pr-32">
            <button
              className="button-gradient border-2 border-[#FFD21D] rounded px-6 py-2 focus:outline-none font-bold mt-6"
              type="submit"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
