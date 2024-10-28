import { Outlet } from "react-router-dom";
import { GuestNavbar } from "../Navbar";
import Footer from "@/pages/Search/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="text-white">
      <GuestNavbar />
      <main className="bg-neutral-900 px-3 lg:px-5 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
