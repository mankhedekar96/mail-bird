import React, { useEffect, useState } from "react";
import "./App.css";
import Tab from "./Components/Tab/Tab";
import Dashboard from "./Components/Dashboard/Dashboard";
import pigeon from "./assets/pigeon.gif";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    setUserEmail(userToken);
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
    } else setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <div>
      {!isLoggedIn && (
        <>
          <header className="header">
            <div className="text-center mt-5 d-flex align-items-center justify-content-center">
              <h3 className="mt-3">Mail - Bird</h3>
              <img
                width="50"
                height="50"
                className="mail-bird"
                src={pigeon}
                alt="logo"
              />
            </div>
          </header>
          <main>
            <Tab />
          </main>
        </>
      )}
      {isLoggedIn && <Dashboard email={userEmail}/>}
    </div>
  );
}

export default App;
