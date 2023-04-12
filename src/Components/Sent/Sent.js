import React, { useContext } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import List from "../List/List";
import { UserContext } from "../../Context/UserProvider";

function Sent() {
  const { user, sentEmails, setSentEmails } = useContext(UserContext);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <span className="h3">Sent Emails</span>
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

      <List listData={sentEmails || []} type="sent" email={user?.email} setListData={setSentEmails} />
    </div>
  );
}

export default Sent;
