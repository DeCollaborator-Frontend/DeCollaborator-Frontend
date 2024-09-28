import PricingCard from "@/components/Cards/PricingCard";
import React from "react";

const MonthlyPricing = () => {
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
          price="0"
          benefits={freeBenefits}
          duration={"month"}
        />
        <PricingCard
          planType="Basic"
          price="15"
          benefits={basicBenefits}
          duration={"month"}
        />
        <PricingCard
          planType="Pro"
          price="25"
          benefits={proBenefits}
          duration={"month"}
        />
      </div>
    </>
  );
};

const CheckIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0013 18.9587C5.05964 18.9587 1.04297 14.942 1.04297 10.0003C1.04297 5.05866 5.05964 1.04199 10.0013 1.04199C14.943 1.04199 18.9596 5.05866 18.9596 10.0003C18.9596 14.942 14.943 18.9587 10.0013 18.9587ZM10.0013 2.29199C5.7513 2.29199 2.29297 5.75033 2.29297 10.0003C2.29297 14.2503 5.7513 17.7087 10.0013 17.7087C14.2513 17.7087 17.7096 14.2503 17.7096 10.0003C17.7096 5.75033 14.2513 2.29199 10.0013 2.29199Z"
        fill="#E8E1DC"
      />
      <path
        d="M8.81719 12.9837C8.65052 12.9837 8.49219 12.917 8.37552 12.8003L6.01719 10.442C5.77552 10.2003 5.77552 9.80033 6.01719 9.55866C6.25885 9.31699 6.65885 9.31699 6.90052 9.55866L8.81719 11.4753L13.1005 7.19199C13.3422 6.95033 13.7422 6.95033 13.9839 7.19199C14.2255 7.43366 14.2255 7.83366 13.9839 8.07533L9.25885 12.8003C9.14219 12.917 8.98385 12.9837 8.81719 12.9837Z"
        fill="#E8E1DC"
      />
    </svg>
  );
};

export default MonthlyPricing;
