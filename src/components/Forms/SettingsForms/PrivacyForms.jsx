export const PrivacyForm = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg">
        <h2 className="text-white text-[28px] font-bold">Privacy</h2>
        <p className="text-[#D4D4D4] mb-5 pb-2 border-[#A9A9A9] border-b">
          Select restrictions on interactions with you
        </p>
        <form action="">
          <div className="flex justify-between pr-32">
            <label htmlFor="industries" className="text-white">
              Who can message you
            </label>
            <select
              id="industries"
              className="bg-transparent border border-[#D4D4D4] focus:outline-none text-white text-base rounded-md block py-2 px-3"
            >
              <option selected className="bg-[#171717] text-base">
                Select Category
              </option>
              <option value="1" className="bg-[#171717] text-base">
                everyone
              </option>
              <option value="2" className="bg-[#171717] text-base">
                followers and following
              </option>
              <option value="3" className="bg-[#171717] text-base">
                following
              </option>
              <option value="4" className="bg-[#171717] text-base">
                everyone except
              </option>
              <option value="5" className="bg-[#171717] text-base">
                no one
              </option>
              <option value="6" className="bg-[#171717] text-base">
                no one except
              </option>
            </select>
          </div>
          <div className="flex justify-between pr-32 mt-5">
            <label htmlFor="industries" className="text-white">
              Who can add you to teams
            </label>
            <select
              id="industries"
              className="bg-transparent border border-[#D4D4D4] focus:outline-none text-white text-base rounded-md block py-2 px-3"
            >
              <option selected className="bg-[#171717] text-base">
                Select Category
              </option>
              <option value="1" className="bg-[#171717] text-base">
                everyone
              </option>
              <option value="2" className="bg-[#171717] text-base">
                followers and following
              </option>
              <option value="3" className="bg-[#171717] text-base">
                following
              </option>
              <option value="4" className="bg-[#171717] text-base">
                everyone except
              </option>
              <option value="5" className="bg-[#171717] text-base">
                no one
              </option>
              <option value="6" className="bg-[#171717] text-base">
                no one except
              </option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};
export const ChangePassword = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg mt-10">
        <div>
          <h2 className="text-white text-[28px] font-bold">
            Change your password
          </h2>
          <p className="text-[#D4D4D4] mb-5 pb-2 border-[#A9A9A9] border-b">
            Change your password
          </p>
          <form action="" className="text-white pr-32">
            <div className="flex justify-between">
              <label htmlFor="current">Current Password</label>
              <input
                type="password"
                name="current"
                id="current"
                className="p-2 bg-transparent border border-[#D4D4D4] rounded-md focus:outline-none text-[#FEFEFE] mb-5"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="new">New Password</label>
              <input
                type="password"
                name="new"
                id="new"
                className="p-2 bg-transparent border border-[#D4D4D4] rounded-md focus:outline-none text-[#FEFEFE] mb-5"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="again">Reenter new password</label>
              <input
                type="password"
                name="again"
                id="again"
                className="p-2 bg-transparent border border-[#D4D4D4] rounded-md focus:outline-none text-[#FEFEFE] mb-5"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export const TwoFA = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg mt-10">
        <div>
          <h2 className="text-white text-[28px] font-bold">
            Two Factor Authentication
          </h2>
          <p className="text-[#D4D4D4] mb-2 pb-2 border-[#A9A9A9] border-b">
            Select restrictions on interactions with you
          </p>
        </div>
        <button
          className="button-gradient border-2 border-[#FFD21D] rounded px-6 py-2 focus:outline-none font-bold mt-6 mx-5"
          type="submit"
        >
          Enable 2FA Authentication
        </button>
      </div>
    </>
  );
};
export const DeleteAccount = () => {
  return (
    <>
      <div className="bg-[#262626] p-5 rounded-lg mt-10">
        <div>
          <h2 className="text-white text-[28px] font-bold">
            Delete your account
          </h2>
          <p className="text-[#D4D4D4] mb-2 pb-2 border-[#A9A9A9] border-b">
            Apply to delete your account with us.
          </p>
        </div>
        <button
          className="bg-[#E53F3F] border-2 border-[#E53F3F] rounded px-6 py-2 focus:outline-none font-bold mt-6 mx-5 text-[#FEFEFE]"
          type="submit"
        >
          Delete your account
        </button>
      </div>
    </>
  );
};
