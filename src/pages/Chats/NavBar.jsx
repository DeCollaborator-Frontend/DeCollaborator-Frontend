import { useChats } from "@/contexts/useChats";

const NavBar = () => {
  const { onSelectChatsCategory, selectedChatsCategory, chatsCategories } =
    useChats();

  return (
    <nav>
      <div className="flex h-full flex-col items-center justify-between bg-neutral-800 px-4 py-6">
        <div className="h-10 w-10 rounded-full bg-neutral-500"></div>
        <div className="flex flex-col items-center gap-8">
          {chatsCategories.map((el) => (
            <div
              key={el}
              onClick={() => onSelectChatsCategory(el)}
              className={`h-6 w-6 cursor-pointer rounded-full bg-neutral-500 ${selectedChatsCategory === el ? "border-4 border-yellow-400" : ""}`}
            ></div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-6">
          <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
          <div className="h-6 w-6 rounded-full bg-neutral-500"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
