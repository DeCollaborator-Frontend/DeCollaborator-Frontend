import { useState } from "react";
import Tab from "./Tab";

const tabText = [
  "Organizations",
  "Individuals",
  "Products",
  "Services",
  "Collab Opportunities",
];

function Tabs({ selectedTab, onSelectTab }) {
  return (
    <ul className="flex list-none justify-center">
      {tabText.map((el) => (
        <Tab
          text={el}
          id={el.toLowerCase()}
          onSelectTab={onSelectTab}
          selectedTab={selectedTab}
          key={crypto.randomUUID()}
        />
      ))}
    </ul>
  );
}

export default Tabs;
