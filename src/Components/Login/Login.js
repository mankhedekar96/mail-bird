import React, { useState } from "react";
import userService from "../../Services/users";
import { Button, Form } from "react-bootstrap";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    userService.readItem(userEmail).then((user) => {
      if (user && user.password === password) {
        localStorage.setItem("user-token", userEmail);
        window.location.reload();
      } else {
        setErrorMessage("Invalid email or password");
      }
    });
  }

  return (
    <Form className="w-75 mx-auto" onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      {errorMessage && <p className="mt-4 text-danger">{errorMessage}</p>}
    </Form>
  )
}

export default Login;
