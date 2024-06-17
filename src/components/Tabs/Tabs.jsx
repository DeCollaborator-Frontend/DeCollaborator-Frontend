import { useState } from "react";
import Tab from "./Tab";

function Tabs({ selectedTab, onSelectTab, tabItemsText }) {
  return (
    <ul className="flex list-none flex-wrap justify-center">
      {tabItemsText.map((el) => (
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
