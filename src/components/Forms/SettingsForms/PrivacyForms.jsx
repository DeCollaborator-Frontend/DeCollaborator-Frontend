export const PrivacyForm = () => {
  return (
    <>
      <div className="rounded-xl bg-[#262626] p-5">
        <h2 className="text-[28px] font-bold text-white">Privacy</h2>
        <p className="mb-5 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
          Select restrictions on interactions with you
        </p>
        <form action="">
          <div className="flex justify-between pr-32">
            <label htmlFor="industries" className="text-white">
              Who can message you
            </label>
            <select
              id="industries"
              className="block rounded-md border border-[#D4D4D4] bg-transparent px-3 py-2 text-base text-white focus:outline-none"
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
          <div className="mt-5 flex justify-between pr-32">
            <label htmlFor="industries" className="text-white">
              Who can add you to teams
            </label>
            <select
              id="industries"
              className="block rounded-md border border-[#D4D4D4] bg-transparent px-3 py-2 text-base text-white focus:outline-none"
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
      <div className="mt-10 rounded-xl bg-[#262626] p-5">
        <div>
          <h2 className="text-[28px] font-bold text-white">
            Change your password
          </h2>
          <p className="mb-5 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Change your password
          </p>
          <form action="" className="pr-32 text-white">
            <div className="flex justify-between">
              <label htmlFor="current">Current Password</label>
              <input
                type="password"
                name="current"
                id="current"
                className="mb-5 rounded-md border border-[#D4D4D4] bg-transparent p-2 text-[#FEFEFE] focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="new">New Password</label>
              <input
                type="password"
                name="new"
                id="new"
                className="mb-5 rounded-md border border-[#D4D4D4] bg-transparent p-2 text-[#FEFEFE] focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <label htmlFor="again">Reenter new password</label>
              <input
                type="password"
                name="again"
                id="again"
                className="mb-5 rounded-md border border-[#D4D4D4] bg-transparent p-2 text-[#FEFEFE] focus:outline-none"
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
      <div className="mt-10 rounded-xl bg-[#262626] p-5">
        <div>
          <h2 className="text-[28px] font-bold text-white">
            Two Factor Authentication
          </h2>
          <p className="mb-2 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Select restrictions on interactions with you
          </p>
        </div>
        <button
          className="button-gradient mx-5 mt-6 rounded border-2 border-[#FFD21D] px-6 py-2 font-bold focus:outline-none"
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
      <div className="mt-10 rounded-xl bg-[#262626] p-5">
        <div>
          <h2 className="text-[28px] font-bold text-white">
            Delete your account
          </h2>
          <p className="mb-2 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
            Apply to delete your account with us.
          </p>
        </div>
        <button
          className="mx-5 mt-6 rounded border-2 border-[#E53F3F] bg-[#E53F3F] px-6 py-2 font-bold text-[#FEFEFE] focus:outline-none"
          type="submit"
        >
          Delete your account
        </button>
      </div>
    </>
  );
};
