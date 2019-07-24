import React from "react";

import { UserConsumer } from "../context/UserContext";

class AddUser extends React.Component {
  state = {
    name: ""
  };

  onNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  onAddUser = (callback, e) => {
    e.preventDefault();
    const { name } = this.state;
    if (name !== "") {
      var newUser = {
        name: this.state.name
      };
      callback(newUser);
      this.setState({
        name: ""
      });
    }
  };

  render() {
    return (
      <UserConsumer>
        {({ addUser }) => (
          <form>
            <input
              type="text"
              name="name"
              placeholder="Enter new user name"
              value={this.state.name}
              onChange={this.onNameChange}
            />
            <button onClick={this.onAddUser.bind(this, addUser)}>Add</button>
          </form>
        )}
      </UserConsumer>
    );
  }
}

export default AddUser;
