import React, { useState } from "react";
import userService from "../../Services/users";
import { Button, Form } from "react-bootstrap";

function SignUp({ redirectToLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSignUp(event) {
    event.preventDefault();
    userService.readItem(email).then((user) => {
      if (user) {
        setErrorMessage("Email already exists");
      } else {
        const newUser = { name, password, email };
        userService.createItem(email, newUser).then(() => {
          redirectToLogin();
          alert("Sign up successful!");
        });
      }
    });
  }

  return (
    <Form className="w-75 mx-auto" onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
      {errorMessage && <p className="mt-4 text-danger">{errorMessage}</p>}
    </Form>
  );
}

export default SignUp;
