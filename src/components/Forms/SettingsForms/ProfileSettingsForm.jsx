import { useState } from "react";
import React from "react";
import ProductsServices from "../../../pages/Search/Results/ProductsServices";
import Filters from "../../../pages/Search/Results/Filters";
// import Image from "../../../  ";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { CreateNewProduct } from "./ProfileModalForms";

export const BasicInfoBrand = () => {
  return (
    <>
      <form action="" className="m-auto w-5/6 text-white  ">
        <div className="flex flex-row items-center justify-between">
          <label htmlFor="brand" className="mr-2">
            Brand Name
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5 flex flex-row items-center justify-between">
          <label htmlFor="email" className="mr-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5 flex flex-row justify-between">
          <label htmlFor="bio" className="mr-2">
            Bio
          </label>
          <textarea
            id="bio"
            name="bio"
            cols="30"
            rows="10"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          ></textarea>
        </div>
        <div className="mt-5 flex flex-row justify-between">
          <label className="mr-2">Phase</label>
          <div className="flex w-5/6">
            <div className="flex items-center">
              <input type="radio" name="launch" id="pre" className="mr-2" />
              <label htmlFor="pre">Pre Launch</label>
            </div>
            <div className="mx-8 flex items-center">
              <input type="radio" name="launch" id="post" className="mx-2" />
              <label htmlFor="post">Post Launch</label>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-between">
          <label htmlFor="industries">Industry</label>
          <select
            id="industries"
            className="block w-5/6 rounded-md border bg-transparent p-2 text-base text-white focus:outline-none"
          >
            <option defaultValue className="bg-[#0F0F0F] text-base">
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
        <div className="mt-5 flex flex-row items-center justify-between">
          <label htmlFor="specialties" className="mr-2">
            Specialties
          </label>
          <input
            type="text"
            id="specialties"
            name="specialties"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5 flex flex-row items-center justify-between">
          <label htmlFor="headquarters" className="mr-2">
            Headquaters
          </label>
          <input
            type="text"
            id="headquarters"
            name="headquarters"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="grid grid-cols-3">
          <div></div>
          <div></div>
          <button className="new mt-5 w-full cursor-pointer rounded-xl border border-[#FFDF00] bg-transparent px-3 py-2">
            <p className="font-poppins text-base font-semibold">
              Add branch Location
            </p>
          </button>
        </div>
        <div className="mt-5 flex flex-row items-center justify-between">
          <label htmlFor="link1" className="mr-2">
            Socail Link 1
          </label>
          <input
            type="text"
            id="link1"
            name="link1"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5 flex flex-row items-center justify-between">
          <label htmlFor="link2" className="mr-2">
            Socail Link 2
          </label>
          <input
            type="text"
            id="link2"
            name="link2"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="mt-5 flex flex-row items-center justify-between">
          <label htmlFor="link3" className="mr-2">
            Socail Link 3
          </label>
          <input
            type="text"
            id="link3"
            name="link3"
            className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap justify-end pb-10 font-bold">
          <button className="mt-4 w-[150px] rounded border-2 border-[#FFDF00] bg-none p-2.5 text-[#FFDF00]">
            CANCEL
          </button>
          <button className="ml-5 mt-4 w-[150px]  rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f]">
            SAVE
          </button>
        </div>
      </form>
    </>
  );
};
export const LinkSettings = () => {
  return (
    <>
      <div className="mt-5 flex flex-row items-center justify-between">
        <label htmlFor="link1" className="mr-2">
          Socail Link 1
        </label>
        <input
          type="text"
          id="link1"
          name="link1"
          className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
        />
      </div>
      <div className="mt-5 flex flex-row items-center justify-between">
        <label htmlFor="link2" className="mr-2">
          Socail Link 2
        </label>
        <input
          type="text"
          id="link2"
          name="link2"
          className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
        />
      </div>
      <div className="mt-5 flex flex-row items-center justify-between">
        <label htmlFor="link3" className="mr-2">
          Socail Link 3
        </label>
        <input
          type="text"
          id="link3"
          name="link3"
          className="w-5/6 rounded-md border bg-transparent p-2 focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap justify-end font-bold">
        <button className="ml-5 mt-4  rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-[#0f0f0f]">
          ADD OTHER LINKS
        </button>
      </div>
    </>
  );
};

export const Product = ({ selectedTab }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const els = [
    {
      name: "Python Programming",
      about: "Learn Python programming language",
      tags: ["Programming", "Python"],
      id: 1,
      price: 100,
      rating: 4.5,
      src: "/assests/images/dashboard.png",
    },
    {
      name: "Machine Learning",
      about: "Introduction to machine learning concepts",
      tags: ["Machine Learning", "AI"],
      id: 2,
      price: 150,
      rating: 4.7,
      src: "/assests/images/dashboard.png",
    },
    {
      name: "Web Development",
      about: "Build dynamic websites with Django",
      tags: ["Web Development", "Python"],
      id: 3,
      price: 120,
      rating: 4.8,
      src: "/assests/images/dashboard.png",
    },
  ];

  return (
    <div>
      <div className="mx-auto grid max-w-5xl gap-8 text-white">
        {els.length == 0 ? (
          <img
            src="/assests/images/no-results.png"
            alt="empty"
            className="mx-auto"
          />
        ) : (
          els.map((el) => (
            <div
              key={el.id}
              className="relative grid gap-6 overflow-hidden rounded-xl bg-[#242222] p-4 sm:grid-cols-2 md:gap-12 md:p-7"
            >
              <div className="absolute right-2 top-2 inline-flex items-center justify-center gap-2.5">
                <div className="rounded-xl bg-[#f7f5dd] px-6 py-1 text-base font-medium leading-normal tracking-tight text-[#008000]">
                  Edit
                </div>
                <div className="rounded-xl bg-[#f7f5dd] px-6 py-1 text-base font-medium leading-normal tracking-tight text-[red]">
                  Delete
                </div>
              </div>
              <img
                src={el.src}
                alt="product image"
                className="h-60 w-full rounded-xl object-cover md:h-64"
              />
              <div className="grid w-full gap-y-4">
                <h3 className="text-lg font-semibold md:text-xl md:font-bold">
                  {el.name}
                </h3>
                <p className="text-md text-sm font-light">{el.about}</p>
                {selectedTab === "products" ? (
                  <>
                    <div className="flex gap-4">
                      <span>Demitchy</span>
                      <span>Okay Bears</span>
                    </div>
                    <p>$ {el.price}</p>
                  </>
                ) : (
                  <>
                    <p>Paid Service</p>
                    <p>Demitchy</p>
                    <p>Lagos, Nigeria</p>
                  </>
                )}
                <p>
                  Rating: <StarRating rating={el.rating} />
                </p>
                <Filters filterList={el.tags} />
              </div>
            </div>
          ))
        )}
        <div className="flex justify-center">
          <button
            className="ml-5 mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-lg font-bold text-[#0f0f0f]"
            onClick={handleModal}
          >
            {selectedTab === "products" ? "Add New Product" : "Add New Service"}
          </button>
        </div>
        {openModal && (
          <div className="modal h-full w-full bg-[white]">
            <div className="modal-content relative flex items-center justify-center bg-[#242222] p-5 text-white">
              <button onClick={handleModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="absolute right-2 top-2 h-6 w-6"
                >
                  <path
                    fill="currentColor"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                  />
                </svg>
              </button>
              <div className="modal-content no-scrollbar h-[80vh] overflow-y-scroll">
                <CreateNewProduct />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const StarRating = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => {
        const starNumber = index + 1;
        if (starNumber <= rating) {
          return <FaStar key={index} className="text-yellow-500" />;
        } else if (starNumber - rating < 1) {
          return <FaStarHalfAlt key={index} className="text-yellow-500" />;
        } else {
          return <FaRegStar key={index} className="text-yellow-500" />;
        }
      })}
    </div>
  );
};

export const CollabOpportunities = () => {
  const els = [
    {
      firm: "Demitchy",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      is_paid: true,
      is_full_time: true,
      posted_on: "12th August, 2021",
      about: "We are looking for a software developer to join our team",
      num_applications: 10,
      tags: ["Software Development", "Python", "Django"],
      id: 1,
    },
    {
      firm: "Demitchy",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      is_paid: true,
      is_full_time: true,
      posted_on: "12th August, 2021",
      about: "We are looking for a software developer to join our team",
      num_applications: 10,
      tags: ["Software Development", "Python", "Django"],
      id: 2,
    },
    {
      firm: "Demitchy",
      role: "Software Developer",
      location: "Lagos, Nigeria",
      is_paid: true,
      is_full_time: true,
      posted_on: "12th August, 2021",
      about: "We are looking for a software developer to join our team",
      num_applications: 10,
      tags: ["Software Development", "Python", "Django"],
      id: 3,
    },
  ];

  return (
    <>
      <ul className="mx-auto grid max-w-5xl gap-8">
        {els.length == 0 ? (
          <img
            src="/assests/images/no-results.png"
            alt="empty"
            className="mx-auto mb-10"
          />
        ) : (
          els.map((el) => (
            <li
              key={el.id}
              className="relative overflow-hidden rounded-xl bg-[#242222] p-4 pt-12 text-sm sm:pt-4"
            >
              <div className="absolute right-2 top-2 inline-flex items-center justify-center gap-2.5">
                <div className="rounded-xl bg-[#f7f5dd] px-6 py-1 text-base font-medium leading-normal tracking-tight text-[#008000]">
                  Edit
                </div>
                <div className="rounded-xl bg-[#f7f5dd] px-6 py-1 text-base font-medium leading-normal tracking-tight text-[red]">
                  Delete
                </div>
              </div>
              <h3 className="mb-3 flex gap-2 text-lg font-semibold md:text-xl md:font-bold">
                <span className="text-yellow-500">{el.firm}</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-300">{el.role}</span>
              </h3>
              <p className="mb-3 flex flex-wrap items-center gap-x-3 font-semibold">
                <span>{el.location}</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span>{el.is_paid ? "Paid" : "Free"} Service</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span>{el.is_full_time ? "Full" : "Part"} time</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span>Posted on {el.posted_on}</span>
              </p>
              <p className="text-md mb-3 text-gray-300">{el.about}</p>
              <p className="mb-3 flex-wrap items-center gap-x-3 font-semibold sm:flex">
                <span>Escrow available</span>
                <span className="aspect-square h-1 rounded-full bg-white"></span>
                <span className="my-4 sm:my-0" style={{ display: "block" }}>
                  <span>Applications: </span>
                  <span className="ms-2 text-sm font-normal">
                    {el.num_applications} received
                  </span>
                </span>
              </p>
              <Filters filterList={el.tags} />
            </li>
          ))
        )}
      </ul>
      <div className="flex justify-center">
        <button className="ml-5 mt-4 rounded border-2 border-[#FFDF00] bg-[#FFDF00] p-2.5 text-lg font-bold text-[#0f0f0f]">
          Add Collab Opportunity
        </button>
      </div>
    </>
  );
};
