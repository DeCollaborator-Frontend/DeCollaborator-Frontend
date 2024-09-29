import React from "react";
import PricingCard from "@/components/Cards/PricingCard";

const AnnualPricing = () => {
  const freeBenefits = [
    {
      text: "0% Less Ads",
    },
    {
      text: "Chat support response: Less than 48hrs",
    },
    {
      text: "Full access to Profile Analytics",
    },
    {
      text: "Max of 2 Products or Services",
    },
    {
      text: "Max of 2 members in Collab team",
    },
  ];

  const basicBenefits = [
    {
      text: "50% Less Ads",
    },
    {
      text: "Chat support response: Less than 24hrs",
    },
    {
      text: "Full access to Profile Analytics",
    },
    {
      text: "Max of 3 Products or Services",
    },
    {
      text: "Max of 3 members in Collab team",
    },
    {
      text: "Max of 3 Collab Opportunities",
    },
    {
      text: "Priority access to new features",
    },
    {
      text: "Max of 5 members in Collab team",
    },
  ];

  const proBenefits = [
    {
      text: "100% Less Ads",
    },
    {
      text: "Max of 2 Affliates",
    },
    {
      text: "Chat support response: Less than 4hrs",
    },
    {
      text: "Full access to Profile Analytics",
    },
    {
      text: "Full access to Collab Analytics",
    },
    {
      text: "Unlimited Number of Products",
    },
    {
      text: "Unlimited Number of Services",
    },
    {
      text: "Unlimited Number of Collab Opportunities",
    },

    {
      text: "Priority access to new features",
    },
    {
      text: "Unlimited members in the Collab team",
    },
  ];
  return (
    <>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <PricingCard
          planType="Free"
          price={0}
          benefits={freeBenefits}
          duration={"year"}
        />
        <PricingCard
          planType="Basic"
          price={156}
          benefits={basicBenefits}
          duration={"year"}
          slashed_price={180}
        />
        <PricingCard
          planType="Pro"
          price={264}
          benefits={proBenefits}
          duration={"year"}
          slashed_price={300}
        />
      </div>
    </>
  );
};

export default AnnualPricing;
