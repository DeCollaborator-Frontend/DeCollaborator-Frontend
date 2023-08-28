import { Routes, Route } from "react-router-dom";
import DashboardListCard from "./components/Cards/DashboardCards";

export default function App() {
  return (
    <div className="flex items-center mt-6 mx-28">
      <DashboardListCard />
    </div>
  )
}
