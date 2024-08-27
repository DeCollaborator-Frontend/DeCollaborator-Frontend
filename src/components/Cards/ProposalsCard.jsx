import React from "react";
import {
  AcceptedProposal,
  CompletedProposal,
  DefaultProposalIcon,
  NewProposalIcon,
  RejectedProposal,
} from "../Icons/Icons";
import SortBy from "../functionalComponents/Sort";
import ProposalTable, { MobileProposalsCard } from "../tables/ProposalTable";
import SearchProposal from "../functionalComponents/Search";
import Filter from "../functionalComponents/Filter";

const ProposalsCard = () => {
  return (
    <>
      <div className="flex flex-col justify-center gap-4 pt-20 text-sm text-white lg:flex-row lg:items-center">
        <div className="flex items-center pr-3">
          <DefaultProposalIcon />
          <p className="pl-1">Default</p>
        </div>
        <div className="flex items-center pr-3">
          <NewProposalIcon />
          <p className="pl-1">New Development</p>
        </div>
        <div className="flex items-center pr-3">
          <CompletedProposal />
          <p className="pl-1">Completed</p>
        </div>
        <div className="flex items-center pr-3">
          <RejectedProposal />
          <p className="pl-1">Proposal Rejected</p>
        </div>
        <div className="flex items-center pr-3">
          <AcceptedProposal />
          <p className="pl-1">Proposal Accepted</p>
        </div>
      </div>
      <div className="bg-[transparent] p-5 md:p-12">
        <div className="rounded-xl border-2 border-[#242222] bg-transparent p-5 text-white md:p-8">
          <div className="hidden lg:block">
            <Searchbar />
          </div>
          <div className="mb-5 lg:hidden">
            <div className="mb-3 flex items-center justify-between">
              <div className="w-[20px]">
                <Filter />
              </div>
              <SortBy />
            </div>
            <SearchProposal />
          </div>
          <div className="block lg:hidden">
            <MobileProposalsCard />
          </div>
          <div className="hidden lg:block">
            <ProposalTable />
          </div>
        </div>
      </div>
    </>
  );
};

const Searchbar = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Filter />
        <SearchProposal />
        <SortBy />
      </div>
    </>
  );
};

export default ProposalsCard;
