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
      <div className="bg-[black] p-12">
        <div className="rounded-xl border-2 border-[#242222] bg-transparent p-8 text-white">
          <div className="flex items-center justify-between">
            <Filter />
            <SearchProposal />
            <SortBy />
          </div>
          <div className="block lg:hidden">
            <MobileProposalsCard />
          </div>
          <div className="hidden lg:block">
            <ProposalTable />
          </div>
        </div>
        <div className="flex flex-col flex-col gap-4 pt-2 text-sm text-white lg:flex-row lg:items-center">
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
      </div>
    </>
  );
};

export default ProposalsCard;
