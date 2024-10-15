import React from "react";
import { Outlet } from "react-router-dom";
import { UserNavbar } from "../Navbar";
import Footer from "@/pages/Search/Footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className="text-white">
      <UserNavbar />
      <main className="bg-neutral-900 px-5 pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
