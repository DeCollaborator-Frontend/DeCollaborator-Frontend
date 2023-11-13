import { Link } from "react-router-dom";
import Filter from "../../components/functionalComponents/Filter";
import Search from "../../components/functionalComponents/Search";
import Sort from "../../components/functionalComponents/Sort";
import HomepageCardsGrid from "../../components/Cards/HomepageCards";

function Homepage() {
  return (
    <div className="py-32 bg-black px-20 text-white ">
      <div className="text-center mb-12">
        <h1 className="capitalize text-6xl font-thin">
          NO 1 collaboration enhancer
        </h1>
        <p className="text-gray-400 text-lg">
          we make collaboration easier and faster
        </p>
      </div>

      <div className="text-center my-24">
        <Link
          className="px-2 text-[#FFDF00] text-xl border-b-4 pb-3 new font-bold"
          to={"/"}
        >
          Brands
        </Link>
        <Link className="px-2 text-xl" to={"/"}>
          Individuals
        </Link>
      </div>

      <div className="flex justify-between items-center">
        <Filter />

        <Sort />
      </div>

      <div>
        <HomepageCardsGrid />
      </div>
    </div>
  );
}

export default Homepage;
