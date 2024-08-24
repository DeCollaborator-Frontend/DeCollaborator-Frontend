export const Level1 = () => {
  return (
    <>
      <div className="mt-10 rounded-xl bg-[#262626] p-5">
        <div>
          <h2 className="text-[28px] font-bold text-white">Level 1</h2>
          <p className="mb-8 border-b  border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Email Verification
          </p>
        </div>
        <div className="flex justify-between pl-10 pr-32 text-white">
          <label htmlFor="new">Email Address</label>
          <div className="mb-5 w-[70%] rounded-md border border-[#D4D4D4] bg-[#A9A9A9] p-2 font-bold text-[#333333] focus:outline-none">
            mitchellobiyor247@yaho.com
          </div>
        </div>
        <div className="flex justify-end pr-32">
          <button
            className="button-gradient mt-6 rounded border-2 border-[#FFD21D] px-6 py-2 font-bold focus:outline-none"
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
      <div className="mt-10 rounded-xl bg-[#262626] p-5">
        <div>
          <h2 className="text-[28px] font-bold text-white">Level 2</h2>
          <p className="mb-8 border-b  border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Social Media Authentications
          </p>
        </div>
        <div className="mb-8">
          <div className="flex justify-between pl-10 pr-32 text-white">
            <label htmlFor="new">Instagram</label>
            <div className="mb-5 w-[70%] rounded-md border border-[#D4D4D4] bg-[#A9A9A9] p-2 font-bold text-[#333333] focus:outline-none">
              https://www.instagram.com/de_mitchy
            </div>
          </div>
          <div className="flex justify-end pr-32">
            <button
              className="button-gradient mt-6 rounded border-2 border-[#FFD21D] px-6 py-2 font-bold focus:outline-none"
              type="submit"
            >
              Verify
            </button>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-between pl-10 pr-32 text-white">
            <label htmlFor="new">Twitter</label>
            <div className="mb-5 w-[70%] rounded-md border border-[#D4D4D4] bg-[#A9A9A9] p-2 font-bold text-[#333333] focus:outline-none">
              https://www.twitter.com/de_mitchy
            </div>
          </div>
          <div className="flex justify-end pr-32">
            <button
              className="button-gradient mt-6 rounded border-2 border-[#FFD21D] px-6 py-2 font-bold focus:outline-none"
              type="submit"
            >
              Verify
            </button>
          </div>
        </div>
        <div className="mb-8">
          <div className="flex justify-between pl-10 pr-32 text-white">
            <label htmlFor="new">LinkedIn</label>
            <div className="mb-5 w-[70%] rounded-md border border-[#D4D4D4] bg-[#A9A9A9] p-2 font-bold text-[#333333] focus:outline-none">
              https://www.linkedin.com/in/demitchy
            </div>
          </div>
          <div className="flex justify-end pr-32">
            <button
              className="button-gradient mt-6 rounded border-2 border-[#FFD21D] px-6 py-2 font-bold focus:outline-none"
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
