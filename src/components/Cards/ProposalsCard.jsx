import React from "react";
import {
  AcceptedProposal,
  CompletedProposal,
  DefaultProposalIcon,
  NewProposalIcon,
  RejectedProposal,
} from "../Icons/Icons";
import SortBy from "../functionalComponents/Sort";
import ProposalTable from "../tables/ProposalTable";
import SearchProposal from "../functionalComponents/Search";
import Filter from "../functionalComponents/Filter";

const ProposalsCard = () => {
  return (
    <>
      <div className="p-12 bg-[black]">
        <div className="p-8 border-2 rounded-xl bg-transparent border-[#242222] text-white">
          <div className="flex items-center justify-between">
            <Filter />
            <SearchProposal />
            <SortBy />
          </div>
          <ProposalTable />
        </div>
        <div className="flex items-center text-white text-xs pt-4">
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
