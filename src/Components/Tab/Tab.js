import React, { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { Tabs } from "react-bootstrap";

function Tab() {
  const [key, setKey] = useState("login");

  return (
    <div className="card w-75 mx-auto p-3">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="w-100 mx-auto mb-3 d-flex justify-content-center"
      >
        <Tab eventKey="login" title="Login">
          <Login />
        </Tab>
        <Tab eventKey="signup" title="Sign Up">
          <SignUp redirectToLogin={() => setKey("login")} />
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tab;
