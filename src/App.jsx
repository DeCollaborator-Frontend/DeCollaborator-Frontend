import { Routes, Route } from "react-router-dom";

import { GuestNavbar, UserNavbar } from "./components/Navbar";
import HomepageCardsGrid, {
  HomepageCards,
  HomepageCardsGrid2,
} from "./components/Cards/HomepageCards";

export default function App() {
  return (
    <div className="">
      <UserNavbar />
      <HomepageCardsGrid />
    </div>
  );
}
