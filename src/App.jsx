import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import Navbar from "./components/Navbar.jsx";
import Homepage from "./pages/Homepage/Homepage.jsx";

import Search from "./pages/Search/Search.jsx";
import SignInPage from "./pages/Authentication_Pages/SignInPage.jsx";
import SignUpPage from "./pages/Authentication_Pages/SignUpPage.jsx";
import CollabCreation from "./pages/User_Dashboard_Pages/Collabs/CollabCreation.jsx";
import ResetPasswordPage from "./pages/Authentication_Pages/ResetPasswordPage.jsx";
import Main from "./pages/User_Dashboard_Pages/Main.jsx";
import ProposalsCard from "./components/Cards/ProposalsCard.jsx";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Chats from "./pages/Chats/ChatsCategory/Chats.jsx";
import MessageArea from "./pages/Chats/MessageArea/MessageArea.jsx";
import { ChatsProvider } from "./contexts/useChats.jsx";
import MessagePanel from "./pages/Chats/MessageArea/MessagePanel.jsx";
import MessageAreaPlaceholder from "./pages/Chats/MessageAreaPlaceholder.jsx";
import CollaborationProposal from "./pages/Chats/CollaborationProposal.jsx";
import DashboardLayout from "./DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    element: (
      <ChatsProvider>
        <Chats />
      </ChatsProvider>
    ),
    children: [
      {
        path: "/chats",
        element: <MessageAreaPlaceholder />,
      },
      {
        path: "/chats/:chatsCategory/:chatId",
        element: <MessageArea />,
      },
      {
        path: "/chats/:chatsCategory/:teamId/:chatId",
        element: <MessageArea />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/chats/:chatsCategory/:chatId/collab-proposal",
        element: <CollaborationProposal />,
      },
    ],
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
