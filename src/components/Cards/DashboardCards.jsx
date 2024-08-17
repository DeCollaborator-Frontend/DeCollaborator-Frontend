import React from "react";
import DashBoardImg from "../../assests/images/dashboard.png";
import SettingsImg from "../../assests/images/settings.png";
// import styles from "../../styles/componentStyles/_dashboardlistcard.scss";

export const DashboardListCard = () => {
  return (
    <div className="relative flex w-fit gap-8 rounded-xl bg-[#242222] px-7 py-8">
      <img
        src={DashBoardImg}
        alt="dashboard"
        className="h-[250px] w-[320px] rounded-md border border-[#FFD21D]"
      />
      <img
        src={SettingsImg}
        alt="settings"
        className="absolute right-8 top-8 cursor-pointer"
      />
      <div>
        <div className="gap mb-6 flex items-center gap-2">
          <h2 className="font-sans text-[39px] font-bold text-white">
            Okay Bears
          </h2>
          <div className="p-2">
            <p className="bg-[rgba(218, 165, 33, 0.05) 100%] font-sans text-[13px] text-[#FFD21D]">
              Brand
            </p>
          </div>
        </div>

        <div className="flex w-[100%] flex-col gap-2">
          <div className="item flex w-full justify-between rounded-lg bg-[#0f0f0f] px-10 py-[10px]">
            <p className="text-[16px] font-medium text-[#E8E1DC]">
              All received proposal (ARP){" "}
            </p>
            <p className="text-[16px] text-[#E8E1DC]">400</p>
          </div>

          <div className="item flex w-full justify-between rounded-lg bg-[#0f0f0f] px-10 py-[10px]">
            <p className="text-[16px] font-medium text-[#E8E1DC]">
              New Development{" "}
            </p>
            <p className="text-[16px] text-[#E8E1DC]">400</p>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-12">
          <buttton className="cursor-pointer rounded-lg bg-[#FFDF00] px-3 py-2">
            <p className="font-poppins text-[18px] text-black">
              Collab Proposals
            </p>
          </buttton>

          <button className="cursor-pointer rounded-lg border border-[#FFDF00] bg-transparent px-3 py-2 text-[#FFDF00]">
            <p className="font-poppins text-[18px] text-[#FFDF00] ">
              Team Chat
            </p>
          </button>

          <button className="cursor-pointer rounded-lg border border-[#FFDF00] bg-transparent px-3 py-2 text-[#FFDF00]">
            <p className="font-poppins text-[18px] text-[#FFDF00] ">
              Analytics
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export const DashboardGridCard = () => {
  return (
    <>
      <div className="m-auto grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative w-fit rounded-lg border border-[#FFD21D]">
          <img
            src={DashBoardImg}
            alt=""
            className="h-[200px] w-[300px] rounded-t-lg"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-3"
          >
            <path
              d="M20 16C20 18.2091 18.2092 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2092 12 20 13.7909 20 16Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
            <path
              d="M13.9246 4L13.3046 7.79859C12.1542 8.17295 11.1098 8.78044 10.2277 9.56498L6.64537 8.20265L4.57001 11.7973L7.52025 14.2095C7.39776 14.7871 7.33334 15.3861 7.33334 16C7.33334 16.6139 7.39776 17.2128 7.52024 17.7905L4.57001 20.2027L6.64537 23.7973L10.2329 22.4396C11.1139 23.2219 12.1565 23.8278 13.3046 24.2014L13.9246 28H18.0754L18.6954 24.2014C19.8458 23.8271 20.8902 23.2196 21.7723 22.435L25.3547 23.7973L27.43 20.2027L24.4798 17.7905C24.6023 17.2129 24.6667 16.6139 24.6667 16C24.6667 15.3861 24.6023 14.7872 24.4798 14.2096L27.43 11.7973L25.3547 8.20271L21.7672 9.56042C20.8862 8.77809 19.8436 8.17222 18.6954 7.79859L18.0754 4H13.9246Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
          </svg>
          <div className="font-poppins rounded-b-lg bg-[#242222] p-4 text-white">
            <div className="mb-5 flex justify-between">
              <h3 className="text-xl font-bold">Demitchy</h3>
              <div>
                <span className="brand text-xs text-[#FFD21D]">Brand</span>
              </div>
            </div>
            <div className="flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>All received proposal (ARP)</span>
              <span>400</span>
            </div>
            <div className="my-3 flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>New Development</span>
              <span>400</span>
            </div>
            <button className="mt-5 w-full cursor-pointer rounded-lg border border-[#FFDF00] bg-[#FFDF00] px-3 py-2 text-[#FFDF00]">
              <p className="font-poppins text-[20px] font-bold text-black">
                Open
              </p>
            </button>
          </div>
        </div>
        <div className="relative w-fit rounded-lg border border-[#FFD21D]">
          <img
            src={DashBoardImg}
            alt=""
            className="h-[200px] w-[300px] rounded-t-lg"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-3"
          >
            <path
              d="M20 16C20 18.2091 18.2092 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2092 12 20 13.7909 20 16Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
            <path
              d="M13.9246 4L13.3046 7.79859C12.1542 8.17295 11.1098 8.78044 10.2277 9.56498L6.64537 8.20265L4.57001 11.7973L7.52025 14.2095C7.39776 14.7871 7.33334 15.3861 7.33334 16C7.33334 16.6139 7.39776 17.2128 7.52024 17.7905L4.57001 20.2027L6.64537 23.7973L10.2329 22.4396C11.1139 23.2219 12.1565 23.8278 13.3046 24.2014L13.9246 28H18.0754L18.6954 24.2014C19.8458 23.8271 20.8902 23.2196 21.7723 22.435L25.3547 23.7973L27.43 20.2027L24.4798 17.7905C24.6023 17.2129 24.6667 16.6139 24.6667 16C24.6667 15.3861 24.6023 14.7872 24.4798 14.2096L27.43 11.7973L25.3547 8.20271L21.7672 9.56042C20.8862 8.77809 19.8436 8.17222 18.6954 7.79859L18.0754 4H13.9246Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
          </svg>
          <div className="font-poppins rounded-b-lg bg-[#242222] p-4 text-white">
            <div className="mb-5 flex justify-between">
              <h3 className="text-xl font-bold">Demitchy</h3>
              <div>
                <span className="brand text-xs text-[#FFD21D]">Brand</span>
              </div>
            </div>
            <div className="flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>All received proposal (ARP)</span>
              <span>400</span>
            </div>
            <div className="my-3 flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>New Development</span>
              <span>400</span>
            </div>
            <button className="mt-5 w-full cursor-pointer rounded-lg border border-[#FFDF00] bg-[#FFDF00] px-3 py-2 text-[#FFDF00]">
              <p className="font-poppins text-[20px] font-bold text-black">
                Open
              </p>
            </button>
          </div>
        </div>
        <div className="relative w-fit rounded-lg border border-[#FFD21D]">
          <img
            src={DashBoardImg}
            alt=""
            className="h-[200px] w-[300px] rounded-t-lg"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-3"
          >
            <path
              d="M20 16C20 18.2091 18.2092 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2092 12 20 13.7909 20 16Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
            <path
              d="M13.9246 4L13.3046 7.79859C12.1542 8.17295 11.1098 8.78044 10.2277 9.56498L6.64537 8.20265L4.57001 11.7973L7.52025 14.2095C7.39776 14.7871 7.33334 15.3861 7.33334 16C7.33334 16.6139 7.39776 17.2128 7.52024 17.7905L4.57001 20.2027L6.64537 23.7973L10.2329 22.4396C11.1139 23.2219 12.1565 23.8278 13.3046 24.2014L13.9246 28H18.0754L18.6954 24.2014C19.8458 23.8271 20.8902 23.2196 21.7723 22.435L25.3547 23.7973L27.43 20.2027L24.4798 17.7905C24.6023 17.2129 24.6667 16.6139 24.6667 16C24.6667 15.3861 24.6023 14.7872 24.4798 14.2096L27.43 11.7973L25.3547 8.20271L21.7672 9.56042C20.8862 8.77809 19.8436 8.17222 18.6954 7.79859L18.0754 4H13.9246Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
          </svg>
          <div className="font-poppins rounded-b-lg bg-[#242222] p-4 text-white">
            <div className="mb-5 flex justify-between">
              <h3 className="text-xl font-bold">Demitchy</h3>
              <div>
                <span className="brand text-xs text-[#FFD21D]">Brand</span>
              </div>
            </div>
            <div className="flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>All received proposal (ARP)</span>
              <span>400</span>
            </div>
            <div className="my-3 flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>New Development</span>
              <span>400</span>
            </div>
            <button className="mt-5 w-full cursor-pointer rounded-lg border border-[#FFDF00] bg-[#FFDF00] px-3 py-2 text-[#FFDF00]">
              <p className="font-poppins text-[20px] font-bold text-black">
                Open
              </p>
            </button>
          </div>
        </div>
        <div className="relative w-fit rounded-lg border border-[#FFD21D]">
          <img
            src={DashBoardImg}
            alt=""
            className="h-[200px] w-[300px] rounded-t-lg"
          />
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-3"
          >
            <path
              d="M20 16C20 18.2091 18.2092 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2092 12 20 13.7909 20 16Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
            <path
              d="M13.9246 4L13.3046 7.79859C12.1542 8.17295 11.1098 8.78044 10.2277 9.56498L6.64537 8.20265L4.57001 11.7973L7.52025 14.2095C7.39776 14.7871 7.33334 15.3861 7.33334 16C7.33334 16.6139 7.39776 17.2128 7.52024 17.7905L4.57001 20.2027L6.64537 23.7973L10.2329 22.4396C11.1139 23.2219 12.1565 23.8278 13.3046 24.2014L13.9246 28H18.0754L18.6954 24.2014C19.8458 23.8271 20.8902 23.2196 21.7723 22.435L25.3547 23.7973L27.43 20.2027L24.4798 17.7905C24.6023 17.2129 24.6667 16.6139 24.6667 16C24.6667 15.3861 24.6023 14.7872 24.4798 14.2096L27.43 11.7973L25.3547 8.20271L21.7672 9.56042C20.8862 8.77809 19.8436 8.17222 18.6954 7.79859L18.0754 4H13.9246Z"
              stroke="#F7F5DD"
              stroke-width="2"
            />
          </svg>
          <div className="font-poppins rounded-b-lg bg-[#242222] p-4 text-white">
            <div className="mb-5 flex justify-between">
              <h3 className="text-xl font-bold">Demitchy</h3>
              <div>
                <span className="brand text-xs text-[#FFD21D]">Brand</span>
              </div>
            </div>
            <div className="flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>All received proposal (ARP)</span>
              <span>400</span>
            </div>
            <div className="my-3 flex justify-between rounded border border-[#0F0F0F] bg-[#0F0F0F] p-2 text-xs">
              <span>New Development</span>
              <span>400</span>
            </div>
            <button className="mt-5 w-full cursor-pointer rounded-lg border border-[#FFDF00] bg-[#FFDF00] px-3 py-2 text-[#FFDF00]">
              <p className="font-poppins text-[20px] font-bold text-black">
                Open
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
