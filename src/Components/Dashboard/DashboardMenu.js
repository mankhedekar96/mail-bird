import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { IoTrashOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { FaInbox, FaTag } from "react-icons/fa";
import { TiStarburst } from "react-icons/ti";
import { FiFileText } from "react-icons/fi";
import { MailContext } from "../../Context/MailProvider";
import { UserContext } from "../../Context/UserProvider";

function DashboardMenu({ setView }) {
  const { setShowModal, setEditEmail } = useContext(MailContext);
  const { receivedEmails } = useContext(UserContext);

  const handleClick = () => {
    setEditEmail(null);
    setShowModal(true);
  };

  return (
    <div className="dashboard-menu py-2 px-4">
      <Button className="compose-mail border-0 d-block w-100" onClick={handleClick}>
        Compose Mail
      </Button>
      <h6 className="mt-4 mb-2">FOLDERS</h6>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center" onClick={() => setView('inbox')}>
        <span>
          <FaInbox />
          <label className="mx-3 align-middle">Inbox</label>
        </span>
        <Badge bg="warning">{receivedEmails.length ? receivedEmails.filter(el => el.unread).length : ''}</Badge>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center" onClick={() => setView('sent')}>
        <span>
          <AiOutlineMail />
          <label className="mx-3 align-middle">Sent Email</label>
        </span>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <TiStarburst />
          <label className="mx-3 align-middle">Important</label>
        </span>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <FiFileText />
          <label className="mx-3 align-middle">Drafts</label>
        </span>
        <Badge bg="danger">2</Badge>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <IoTrashOutline />
          <label className="mx-3 align-middle">Trash</label>
        </span>
      </div>

      <h6 className="mt-4 mb-2">CATEGORIES</h6>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <label className="p-2 rounded-circle bg-success align-middle"></label>
          <label className="mx-3 align-middle">Work</label>
        </span>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <label className="p-2 rounded-circle bg-danger align-middle"></label>
          <label className="mx-3 align-middle">Documents</label>
        </span>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <label className="p-2 rounded-circle bg-primary align-middle"></label>
          <label className="mx-3 align-middle">Social</label>
        </span>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <label className="p-2 rounded-circle bg-info align-middle"></label>
          <label className="mx-3 align-middle">Advertising</label>
        </span>
      </div>

      <div className="w-100 text-center py-1 d-flex justify-content-between align-items-center">
        <span>
          <label className="p-2 rounded-circle bg-warning align-middle"></label>
          <label className="mx-3 align-middle">Clients</label>
        </span>
      </div>

      <h6 className="mt-4 mb-2">LABELS</h6>
      <div className="w-100 text-left py-1">
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Family
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Work
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Home
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Children
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Holidays
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Music
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Photography
        </Badge>
        <Badge className="border p-2 m-2 rounded-0" bg="light" text="secondary">
          <FaTag /> Family
        </Badge>
      </div>
    </div>
  );
}

export default DashboardMenu;
