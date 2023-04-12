import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardBody from "./DashboardBody";
import { UserProvider } from "../../Context/UserProvider";
import MailPopup from "../MailPopup/MailPopup";
import { MailContext } from "../../Context/MailProvider";

function Dashboard({ email }) {
  const [isSideBarOpen, setIsSidebarOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editEmail, setEditEmail] = useState(null);

  const logout = () => {
    localStorage.removeItem("user-token");
    window.location.reload();
  };

  return (
    <div className="d-flex">
      <UserProvider email={email}>
        <MailContext.Provider value={{ showModal, setShowModal, editEmail, setEditEmail }}>
          <Sidebar open={isSideBarOpen} />
          <main className="w-100 bg-light">
            <DashboardHeader logout={logout} toggleSidebar={() => setIsSidebarOpen(!isSideBarOpen)} />
            <DashboardBody />
          </main>
          {showModal && <MailPopup onClose={() => setShowModal(false)} />}
        </MailContext.Provider>
      </UserProvider>
    </div>
  );
}

export default Dashboard;
