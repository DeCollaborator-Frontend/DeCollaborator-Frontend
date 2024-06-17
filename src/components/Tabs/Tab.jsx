function Tab({ text, id, onSelectTab, selectedTab }) {
  let selected = id === selectedTab ? true : false;

  return (
    <li
      className={`cursor-pointer p-1 px-2 ${
        selected
          ? "border-b-[3px] border-[#ffdf00]  font-semibold text-[#ffdf00]"
          : "text-white"
      }`}
      onClick={() => onSelectTab(id)}
    >
      {text}
    </li>
  );
}

export default Tab;
