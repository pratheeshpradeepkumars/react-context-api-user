import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/Nav";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

import { UserProvider } from "./context/UserContext";

import "./styles.css";

function App() {
  return (
    <UserProvider>
      <Nav />
      <AddUser />
      <UserList />
    </UserProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
