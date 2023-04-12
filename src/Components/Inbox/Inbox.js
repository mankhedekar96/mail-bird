import React, { useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import List from "../List/List";
import { UserContext } from "../../Context/UserProvider";

function Inbox() {
  const { user, receivedEmails, setReceivedEmails } = useContext(UserContext);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="h3">Inbox {receivedEmails.length ? `(${receivedEmails.filter(el => el.unread).length})` : ''}</span>
        <InputGroup className="compose-mail-search-container mb-3">
          <Form.Control
            placeholder="Search email"
            aria-label="Search email"
            aria-describedby="basic-addon2"
          />
          <Button className="compose-mail" variant="success" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>

      <List listData={receivedEmails || []} type="received" email={user?.email} setListData={setReceivedEmails} />
    </div>
  );
}

export default Inbox;
