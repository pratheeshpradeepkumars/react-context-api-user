import React from "react";
import Users from "./Users";

import { UserConsumer } from "../context/UserContext";

const UserList = () => {
  return (
    <UserConsumer>
      {({ users }) => (
        <ul className="users-container">
          {users.map(user => (
            <Users name={user.name} key={user.id} />
          ))}
        </ul>
      )}
    </UserConsumer>
  );
};

export default UserList;
