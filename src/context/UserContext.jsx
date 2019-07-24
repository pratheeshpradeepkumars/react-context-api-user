import React, { createContext } from "react";

export const UserContext = createContext();

export class UserProvider extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ users: json }));
  };
  addUser = newUser => {
    const { users } = this.state;
    newUser.id = users.length + 1;
    const newUserList = [newUser, ...users];
    this.setState({
      users: newUserList
    });
  };
  render() {
    const { users } = this.state;
    return (
      <UserContext.Provider
        value={{
          users,
          addUser: this.addUser
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
