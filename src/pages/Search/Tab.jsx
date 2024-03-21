function Tab({ text, id, onSelectTab, selectedId }) {
  let selected = id == selectedId ? true : false;

  return (
    <li
      className={`p-1 px-2 cursor-pointer ${
        selected
          ? "border-b-4 border-yellow-500  text-yellow-500 font-bold"
          : "text-white"
      }`}
      onClick={() => onSelectTab(id)}
    >
      {text}
    </li>
  );
}

export default Tab;
