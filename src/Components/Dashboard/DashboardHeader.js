import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { TiThMenuOutline } from "react-icons/ti";
import { FaSignOutAlt, FaBell } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { UserContext } from "../../Context/UserProvider";

function DashboardHeader({ logout, toggleSidebar }) {
  const { receivedEmails } = useContext(UserContext);

  return (
    <div className="d-flex w-100 bg-white p-3 justify-content-between align-items-center">
      <div>
        <Button className="sidebar-toggle align-middle" onClick={toggleSidebar}>
          <TiThMenuOutline className="mt-n3" />
        </Button>
        <input
          type="text"
          className="dashboard-search"
          placeholder="Search for something"
        />
      </div>
      <div>
        <span className="icon-badge-container text-secondary h5">
          <HiMail />
          <Badge className="icon-badge" bg="warning">
            {receivedEmails.length ? receivedEmails.filter(el => el.unread).length : ''}
          </Badge>
        </span>
        <span className="icon-badge-container text-secondary h5">
          <FaBell />
          <Badge className="icon-badge" bg="success">
            8
          </Badge>
        </span>
        <span className="text-secondary h6 mx-2" onClick={logout}>
          <FaSignOutAlt />
          <label className="mx-2 align-middle">Log out</label>
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
