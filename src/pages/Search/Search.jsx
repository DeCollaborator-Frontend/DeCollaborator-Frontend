import { GuestNavbar } from "../../components/Navbar";
import Footer from "./Footer";
import SearchHeader from "./SearchHeader";
import SearchResults from "./SearchResults";

function Search() {
  return (
    <>
      <GuestNavbar />
      <div className="min-h-screen bg-black pt-40 text-white">
        <SearchHeader />
        <SearchResults />
        <Footer />
      </div>
    </>
  );
}

export default Search;
