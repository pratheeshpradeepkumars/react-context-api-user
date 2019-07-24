import React from "react";

import { UserConsumer } from "../context/UserContext";

const Nav = () => {
  return (
    <UserConsumer>
      {({ users }) => (
        <nav>
          <ul>
            <li>Admin</li>
            <li className="pull-right">Total users : {users.length} </li>
          </ul>
        </nav>
      )}
    </UserConsumer>
  );
};

export default Nav;
