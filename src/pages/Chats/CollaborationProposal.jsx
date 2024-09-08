import CustomFormField from "@/components/CustomFormField";
import { DialogHeader } from "@/components/ui/dialog";
import { getBrands, getUser } from "@/lib/actions/chats";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
import { currentUserId } from "@/contexts/useChats";

const CollaborationProposal = () => {
  const [brands, setBrands] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [selectedBrand, setselectedBrand] = useState();
  const [currentUser, setCurrentUser] = useState({});

  console.log(currentUser);

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser(currentUserId);
        setCurrentUser(user);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchBrands() {
      try {
        const brands = await getBrands();

        setBrands(
          brands.map((brand) => {
            return { ...brand, isSelected: false };
          }),
        );
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchBrands();
  }, []);

  function handleListCollaborators() {
    setIsDialogOpen(true);
  }
  function handleSelectCollaborator(brand) {
    setBrands(
      brands.map((br) =>
        brand.id === br.id ? { ...brand, isSelected: !br.isSelected } : br,
      ),
    );
    setIsDialogOpen(false);
  }
  function handleRemoveCollaborator() {}
  return (
    <div className="bg-neutral-900 py-12 text-white">
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="border-0 bg-neutral-800 p-5 pt-12 text-white">
          <div className="text-center">
            <DialogTitle className="mb-5 text-xl">Select Brand</DialogTitle>
            <DialogDescription>
              Select the only entity responsible for processing your proposal
            </DialogDescription>
          </div>
          <li className="mt-4 flex cursor-pointer items-center justify-between rounded-lg border-2 border-neutral-600 p-3">
            <div className="flex items-center gap-2">
              <img
                src={`/assests/images/Brands/Okay Bears.png`}
                className="h-8 w-8 rounded-full border border-yellow-500"
                alt="brand logo"
              />
              <span>Collab team</span>
            </div>
            <span className="text-2xl font-semibold">{">"}</span>
          </li>
          <span className="text-sm font-semibold">Choose one</span>
          <ul className="space-y-4">
            {brands?.map((brand) => (
              <li
                key={brand.id}
                className=""
                onClick={() => handleSelectCollaborator(brand)}
              >
                <button
                  className={`flex w-full cursor-pointer items-center justify-between rounded-lg border-2 border-neutral-600 p-3 ${brand.isSelected ? "opacity-30" : ""}`}
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={`/assests/images/Brands/${brand.profileImage}`}
                      className="h-8 w-8 rounded-full border border-yellow-500"
                      alt="brand logo"
                    />
                    <span>{brand.name}</span>
                  </div>
                  <span className="text-2xl font-semibold">{">"}</span>
                </button>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
      <div className="py-5 text-center">
        <h1 className="text-3xl font-extrabold">Collaboration Proposal Form</h1>
        <p>Please fill the form with the appropriate info</p>
      </div>
      <div className="mx-auto mb-10 max-w-3xl py-3">
        <h2 className="mb-3 text-center text-xl font-bold">Collaborators</h2>
        <div className="flex items-center justify-between rounded-2xl bg-neutral-800 px-8 py-4">
          <div className="space-y-5">
            <div className="flex">
              <div className="flex w-28 flex-col font-semibold">
                <span>From:</span>
                <span className="ml-2 mt-3 opacity-55">Sender:</span>
              </div>
              <div className="flex flex-col justify-between">
                {true ? (
                  <button
                    onClick={handleListCollaborators}
                    className="w-fit rounded-lg bg-neutral-500 bg-opacity-30 p-[5px] px-2 text-sm leading-3"
                  >
                    Click here to select
                  </button>
                ) : (
                  <button
                    onClick={handleRemoveCollaborator}
                    className="w-fit rounded-lg bg-neutral-500 bg-opacity-30 p-[5px] px-2 text-sm leading-3"
                  >
                    Click here to select
                  </button>
                )}
                <span className="w-fit rounded-lg bg-neutral-950 bg-opacity-30 p-[5px] px-2 text-sm leading-3">
                  {currentUser.name}
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="flex w-28 flex-col font-semibold">
                <span>To:</span>
                <span className="ml-2 mt-3 opacity-55">Receiver:</span>
              </div>
              <div className="flex flex-col justify-between">
                <button className="w-fit rounded-lg bg-neutral-500 bg-opacity-30 p-[5px] px-2 text-sm leading-3">
                  Click here to select
                </button>
                <span className="w-fit rounded-lg bg-neutral-950 bg-opacity-30 p-[5px] px-2 text-sm leading-3">
                  Select proposal receiver
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="z-10 mr-[-55px] grid h-40 w-40 place-items-center overflow-hidden rounded-full border-2 border-yellow-500 bg-neutral-900">
              <img
                className="h-full w-full"
                src="/assests/images/Brands/Okay Bears Black.png"
                alt="brand"
              />
            </div>
            <div className="grid h-40 w-40 place-items-center overflow-hidden rounded-full border-2 border-yellow-500 bg-neutral-900">
              <img
                className="h-full w-full"
                src="/assests/images/Brands/DeMitchy.png"
                alt="brand"
              />
            </div>

            <button className="ml-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-yellow-500 font-extrabold">
              +
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="mb-3 text-center text-xl font-bold">Collab details</h2>
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
              <label htmlFor="collabType" className=" font-bold">
                Collab Type
              </label>
              <select
                className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                id="collabType"
              >
                <option value="Partnership">Partnership</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
              <label htmlFor="collabType" className=" font-bold">
                Collab Title
              </label>
              <input
                type="text"
                placeholder="Title"
                className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                id="collabType"
              />
            </div>
            <div className="flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
              <label htmlFor="attachFile" className=" font-bold">
                Attach a file
              </label>
              <label
                htmlFor="attachFile"
                className="relative flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-neutral-700 bg-transparent p-2"
              >
                <div className=" h-5 w-5 rounded-full bg-neutral-600"></div>
                <span>Add file</span>
                <input
                  type="file"
                  id="attachFile"
                  className="absolute inset-0 hidden "
                />
              </label>
            </div>
            <div className="col-[1/-1] flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
              <label htmlFor="description" className=" font-bold">
                Description
              </label>
              <textarea
                rows={5}
                className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                id="description"
                placeholder="Description"
              ></textarea>
            </div>
            <div className="col-[1/-1] flex flex-col gap-2 rounded-lg bg-neutral-800 p-4">
              <label htmlFor="description" className=" font-bold">
                Description
              </label>
              <textarea
                rows={5}
                className="rounded-lg border-2 border-neutral-700 bg-transparent px-3 py-2"
                id="description"
                placeholder="Description"
              ></textarea>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-5">
            <button className="rounded-md bg-yellow-500 px-6 py-4 font-bold leading-4 text-neutral-900">
              Send Proposal
            </button>
            <button className="rounded-md border-2 border-yellow-500 bg-transparent px-6 py-4 font-bold leading-4 text-yellow-500">
              Discard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CollaborationProposal;
