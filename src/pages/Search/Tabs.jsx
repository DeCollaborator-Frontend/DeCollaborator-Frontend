import { useState } from "react";
import Tab from "./Tab";

const tabText = [
  "Organizations",
  "Individuals",
  "Products",
  "Services",
  "Collab Opportunities",
];

function Tabs() {
  const [selectedId, setSelectedId] = useState("Organizations");

  function handleSelectTab(id) {
    setSelectedId(id);
  }
  return (
    <ul className="list-none flex justify-center">
      {tabText.map((el) => (
        <Tab
          text={el}
          id={el}
          onSelectTab={handleSelectTab}
          selectedId={selectedId}
          key={crypto.randomUUID()}
        />
      ))}
    </ul>
  );
}

export default Tabs;
