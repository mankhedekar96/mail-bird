import React, { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import { createEmail } from "../../Services/emails";
import { UserContext } from "../../Context/UserProvider";
import { MailContext } from "../../Context/MailProvider";

const MailPopup = ({ onClose }) => {
  const { editEmail } = useContext(MailContext);
  const [to, setTo] = useState(editEmail?.to || "");
  const [cc, setCc] = useState(editEmail?.cc || "");
  const [subject, setSubject] = useState(editEmail?.subject || "");
  const [body, setBody] = useState(editEmail?.body || "");
  const { user, refresh } = useContext(UserContext);

  const handleSend = async (e) => {
    e.preventDefault();
    const uniqueId = Date.now().toString() + Math.random().toString();
    const emailObj = {
      id: uniqueId,
      from: user.email,
      to,
      cc,
      subject,
      body,
      created: new Date(),
      unread: true
    };

    await createEmail(emailObj);
    // Close the popup
    refresh();
    onClose();
  };

  return (
    <Modal size="lg" centered show={true}>
      <div className="card p-2">
        <div className="card-body">
          <form onSubmit={handleSend}>
            <div className="form-group mb-3">
              <label htmlFor="to">To:</label>
              <input
                type="email"
                id="to"
                className="form-control"
                value={to}
                onChange={(e) => setTo(e.target.value.toLowerCase())}
                required
                disabled={editEmail}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="cc">CC:</label>
              <input
                type="email"
                id="cc"
                className="form-control"
                value={cc}
                onChange={(e) => setCc(e.target.value.toLowerCase())}
                disabled={editEmail}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                disabled={editEmail}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="body">Body:</label>
              <textarea
                id="body"
                className="form-control"
                rows={10}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                disabled={editEmail}
              />
            </div>
            <div className="buttons">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                {editEmail ? 'Close' : 'Cancel'}
              </button>
              {!editEmail && <button
                type="submit"
                className="btn btn-primary mx-3"
              >
                Send
              </button>}
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default MailPopup;
