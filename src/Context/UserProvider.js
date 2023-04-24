import React, { createContext, useEffect, useState } from "react";
import userService from "../Services/users";
import { readEmails, readLabels } from "../Services/emails";

const UserContext = createContext(undefined);

function UserProvider({ children, email }) {
  const [user, setUser] = useState(null);
  const [sentEmails, setSentEmails] = useState([]);
  const [labels, setLabels] = useState([]);
  const [receivedEmails, setReceivedEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  const refresh = () => setLoading(!loading);

  useEffect(() => {
    console.log('Refreshed!');
    userService.readItem(email).then(userObj => {
      setUser(userObj);
    });
    readEmails(email, 'sent').then(emails => {
      setSentEmails(emails?.sort((a, b) => b.created - a.created) || []);
    });
    readEmails(email, 'received').then(emails => {
      setReceivedEmails(emails?.sort((a, b) => b.created - a.created) || []);
    });
    readLabels(email).then(labels => {
      setLabels(labels?.sort());
    });
  },[email, loading]);

  return (
    <UserContext.Provider value={{user, sentEmails, receivedEmails, setSentEmails, setReceivedEmails, refresh, labels, setLabels}}>
        {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };