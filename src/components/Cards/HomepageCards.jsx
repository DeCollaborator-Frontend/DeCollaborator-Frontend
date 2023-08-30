//Same card design but 2 different grid systems
// 4 card grid system
// 6 card grid system
import DashBoardImg from "../../assests/images/dashboard.png";
import dummyData from "../../data/dummyData/homepageCardsData.json";

export const HomepageCards = (props) => {
  const { username, about, collabs, avatar, available, category } = props;
  return (
    <>
      <div className="rounded-lg border border-[#FFD21D] w-full">
        <img
          src={avatar}
          alt={username}
          className="w-full h-[200px] rounded-t-lg"
        />
        <div className="p-4 bg-[#242222] text-white font-poppins rounded-b-lg">
          <div className="mb-3 m-auto">
            <h3 className="text-xl font-bold text-center">{username}</h3>
          </div>
          <p className="text-center">{about}</p>
          <div className="flex justify-between rounded p-2 text-xs">
            <span>Open to collabs</span>
            <span>{collabs}</span>
          </div>
          <div className="flex justify-between rounded p-2 text-xs">
            <span>Available</span>
            <span>{available}</span>
          </div>
          <div className="flex justify-between rounded p-2 text-xs">
            <span>Category</span>
            <span>{category}</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FFDF00] border border-[#FFDF00] text-[#FFDF00] rounded-lg py-2 px-3 cursor-pointer w-9/12 mt-5">
              <p className="text-[20px] font-poppins text-black font-bold">
                Open
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const HomepageCardsGrid = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-10">
        {dummyData.user.map((data, index) => {
          return <HomepageCards key={index} {...data} />;
        })}
      </div>
    </>
  );
};

export const HomepageCardsGrid2 = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 p-10">
        {dummyData.user.map((data, index) => {
          return <HomepageCards key={index} {...data} />;
        })}
      </div>
    </>
  );
};
export default HomepageCardsGrid;
