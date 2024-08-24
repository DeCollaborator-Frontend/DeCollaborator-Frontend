import { useState } from "react";

export const ContactUsForm = ({ closeModal }) => {
  return (
    <>
      <div className="relative m-5 max-w-[480px] rounded-xl bg-[#262626] p-5">
        <button onClick={closeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="absolute right-2 top-2 h-6 w-6"
          >
            <path
              fill="white"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
            />
          </svg>
        </button>
        <h2 className="text-[28px] font-bold text-white">Reach out to us</h2>
        <p className="mb-5 border-b border-[#A9A9A9] pb-2 text-[#D4D4D4]">
          Send us a message on whatever question you have
        </p>
        <form action="" className="flex flex-col">
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="mb-5 w-full rounded-md border border-[#D4D4D4] bg-transparent p-2 text-[#FEFEFE] placeholder:text-base placeholder:text-[#FEFEFE] autofill:bg-transparent focus:outline-none"
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address"
            className="mb-5 w-full rounded-md border border-[#D4D4D4] bg-transparent p-2 text-[#FEFEFE] placeholder:text-base placeholder:text-[#FEFEFE] autofill:bg-transparent focus:outline-none"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Subject"
            className="mb-5 w-full rounded-md border border-[#D4D4D4] bg-transparent p-2 text-[#FEFEFE] placeholder:text-base placeholder:text-[#FEFEFE] autofill:bg-transparent focus:outline-none"
          />
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            placeholder="Enter message here"
            className="rounded-md border border-[#D4D4D4] bg-transparent p-2 text-white placeholder:text-base placeholder:text-[#FEFEFE] focus:outline-none"
          ></textarea>
          <button
            className="button-gradient mt-6 w-full rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export const ChatWithUs = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <div className="flex items-center justify-between rounded-xl bg-[#262626] p-9">
        <div>
          <h2 className="text-[28px] font-bold text-white">
            Still have questions?
          </h2>
          <p className="text-[#D4D4D4]">
            Can’t find the answer you’re looking for? Please send a message to
            our friendly team.
          </p>
        </div>
        <button
          className="button-gradient mt-6 w-[150px] rounded-md border-2 border-[#FFD21D] p-2 font-bold focus:outline-none"
          onClick={openModal}
        >
          Chat With Us!
        </button>
        {modalOpen && (
          <div className="modal h-full w-full">
            <div className="modal-content flex items-center justify-center p-5">
              <ContactUsForm closeModal={closeModal} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ChatWithUs;
