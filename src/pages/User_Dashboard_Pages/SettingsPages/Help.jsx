import FaqAccordion from "../../../components/Accordion";
import ChatWithUs from "../../../components/Forms/SettingsForms/ContactUsForm";
import { SearchIcon } from "../../../components/Icons/Icons";
import { UserNavbar } from "../../../components/Navbar";
import FAQdata from "../../../data/dummyData/FAQ.json";

const HelpSettingsPage = () => {
  console.log(FAQdata.faqs[2]);

  return (
    <>
      <UserNavbar />
      <div className="mb-20 pt-32">
        <h1 className="text-center text-[56px] text-[#E8E1DC]">
          Help Settings
        </h1>
        <p className="text-center text-[20px] text-[#959595]">
          Find answers to any question(s) you mah have.
        </p>
      </div>
      <div className="rounded-xl border-4 border-[#242222] px-28 py-10">
        <div className="mb-8 rounded-lg bg-[#262626] p-8 text-center">
          <h2 className="mb-3 text-[28px] font-bold text-white">
            Ask us Anything
          </h2>
          <p className="mb-5 text-[#D4D4D4]">
            Have any questions? We’re here to assist you.
          </p>
          <form action="" className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.9974 26.9993L21.0161 21.0074M24.3307 12.9993C24.3307 16.0051 23.1367 18.8878 21.0113 21.0132C18.8859 23.1386 16.0032 24.3327 12.9974 24.3327C9.99161 24.3327 7.10893 23.1386 4.98352 21.0132C2.85811 18.8878 1.66406 16.0051 1.66406 12.9993C1.66406 9.99356 2.85811 7.11088 4.98352 4.98547C7.10893 2.86006 9.99161 1.66602 12.9974 1.66602C16.0032 1.66602 18.8859 2.86006 21.0113 4.98547C23.1367 7.11088 24.3307 9.99356 24.3307 12.9993V12.9993Z"
                    stroke="#FEFEFE"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-[640px] rounded-md border border-[#D4D4D4] bg-[#333333] px-3 py-3.5 text-sm text-white placeholder:text-sm  placeholder:text-[#D4D4D4] dark:placeholder-gray-400"
                placeholder="Search for a question"
                required
              />
            </div>
          </form>
          <div className="m-auto mt-5 flex max-w-[480px] items-center justify-between rounded-md bg-[#171717] p-5">
            <div className="flex">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.40312 0.199219H20.6031C21.2631 0.199219 21.8031 0.739219 21.8031 1.39922V20.5992C21.8031 21.2592 21.2631 21.7992 20.6031 21.7992H1.40312C0.743125 21.7992 0.203125 21.2592 0.203125 20.5992V1.39922C0.203125 0.739219 0.743125 0.199219 1.40312 0.199219ZM9.81512 9.78722V2.58722H2.60312V9.78722H9.81512ZM19.4151 9.78722V2.58722H12.2151V9.78722H19.4151ZM9.81512 19.3992V12.1992H2.60312V19.3992H9.81512ZM19.4151 19.3992V12.1992H12.2151V19.3992H19.4151Z"
                  fill="#FEFEFE"
                />
              </svg>
              <p className="mx-3 text-white">Categories</p>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.9181 8.94922L13.3981 15.4692C12.6281 16.2392 11.3681 16.2392 10.5981 15.4692L4.07812 8.94922"
                  stroke="#FEFEFE"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-8 rounded-lg bg-[#262626] p-8">
          <h2 className="mb-3 text-[28px] font-bold text-white">
            Frequently asked questions
          </h2>
          <p className="mb-5 border-b border-[#A9A9A9] pb-3 text-[#D4D4D4]">
            Select restrictions on interactions with you
          </p>
          {FAQdata.faqs.map((data, index) => (
            <FaqAccordion
              key={index}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </div>
        <ChatWithUs />
      </div>
    </>
  );
};

export default HelpSettingsPage;
