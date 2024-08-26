import { useContext, useState, useEffect } from "react";
import { CollabContext } from "../../../context/ProductsServicesCollabContext";
import NoImage from "../../../assests/Cover.png";

const NewOpportunityForm = ({ closeModal }) => {
  const {
    collabDetails,
    setCollabDetails,
    addCollab,
    updateCollab,
    allCollabs,
  } = useContext(CollabContext);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setCollabDetails((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    } else if (name === "tags") {
      setCollabDetails((prevState) => ({
        ...prevState,
        tags: value.split(",").map((tag) => tag.trim()),
      }));
    } else {
      setCollabDetails((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (collabDetails.id) {
      updateCollab();
    } else {
      addCollab();
    }
    closeModal();
    console.log(allCollabs);
  };

  return (
    <div>
      <div className="border-b-2 border-[#7F7F7F] p-5">
        <h1 className="text-2xl font-bold text-[#A9A9A9]">Add Opportunity</h1>
      </div>
      <form onSubmit={handleSubmit} className="p-8 text-black">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <div className="relative mb-5">
              <input
                type="text"
                id="name"
                name="name"
                value={collabDetails.name}
                onChange={handleChange}
                placeholder=" "
                className="peer block w-full appearance-none rounded border border-2 border-[#7F7F7F] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-white focus:outline-none"
              />
              <label
                htmlFor="name"
                className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-[#7F7F7F] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
              >
                Oportunity Name
              </label>
            </div>
            <div className="relative mb-5">
              <textarea
                type="text"
                id="description"
                name="description"
                value={collabDetails.description}
                rows={10}
                cols={30}
                onChange={handleChange}
                placeholder=" "
                className="peer block w-full appearance-none rounded border border-2 border-[#7F7F7F] bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 text-white focus:outline-none"
              />
              <label
                htmlFor="description"
                className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-[#7F7F7F] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
              >
                Description
              </label>
            </div>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="provider"
            name="provider"
            value={collabDetails.provider}
            onChange={handleChange}
            placeholder=" "
            className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
          />
          <label
            htmlFor="provider"
            className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Opportunity Provider(s)
          </label>
        </div>
        <div className="mb-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_escrow"
              name="is_escrow"
              value={collabDetails.is_escrow}
              className="h-4 w-4 rounded border-2 border-[#7F7F7F] bg-transparent"
              onChange={handleChange}
            />
            <label
              htmlFor="is_escrow"
              className="top-2 mx-3 bg-[#242222] text-base text-[#7F7F7F]"
            >
              Enable Escrow
            </label>
          </div>
        </div>
        <div className="mb-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_full_time"
              name="is_full_time"
              value={collabDetails.is_full_time}
              className="h-4 w-4 rounded border-2 border-[#7F7F7F] bg-transparent"
              onChange={handleChange}
            />
            <label
              htmlFor="is_full_time"
              className="top-2 mx-3 bg-[#242222] text-base text-[#7F7F7F]"
            >
              Full Time Opportunity
            </label>
          </div>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="tags"
            name="tags"
            value={collabDetails.tags.join(", ")}
            onChange={handleChange}
            placeholder=" "
            className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
          />
          <label
            htmlFor="tags"
            className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Tags (separated by commas)
          </label>
        </div>
        <div className="mb-5">
          <select
            id="type"
            name="type"
            value={collabDetails.type}
            onChange={handleChange}
            className="text- peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-[#7F7F7F] focus:outline-none"
          >
            <option defaultValue className="bg-[#0F0F0F] text-base">
              Select Opportunity Type
            </option>
            <option value="Job Opportunity" className="bg-[#0F0F0F] text-base">
              Job Opportunity
            </option>
            <option
              value="Sponsorship Opportunity"
              className="bg-[#0F0F0F] text-base"
            >
              Sponsorship Opportunity
            </option>
            <option
              value="Partnership Opportunity"
              className="bg-[#0F0F0F] text-base"
            >
              Partnership Opportunity
            </option>
          </select>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="role"
            name="role"
            value={collabDetails.role}
            onChange={handleChange}
            placeholder=" "
            className="peer block w-full appearance-none rounded border border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-none"
          />
          <label
            htmlFor="role"
            className="absolute top-2 z-10 mx-2 origin-[0] -translate-y-4 scale-75 transform bg-[#242222] text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2"
          >
            Available Role
          </label>
        </div>

        <div className="mb-5">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_paid"
              name="is_paid"
              value={collabDetails.is_paid}
              className="h-4 w-4 rounded border-2 border-[#7F7F7F] bg-transparent"
              onChange={handleChange}
            />
            <label
              htmlFor="is_paid"
              className="top-2 mx-3 bg-[#242222] text-base text-[#7F7F7F]"
            >
              Paid Opportunity
            </label>
          </div>
        </div>

        <div className="flex flex-wrap justify-end pb-3 font-bold">
          <button
            className="mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]"
            onClick={closeModal}
          >
            CANCEL
          </button>
          <button
            type="submit"
            className="ml-5 mt-4 w-[150px]  rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f]"
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewOpportunityForm;
