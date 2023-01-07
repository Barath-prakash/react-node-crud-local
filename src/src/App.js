import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Users } from "./components/Users";
import { DisplayBoard } from "./components/DisplayBoard";
import CreateUser from "./components/CreateUser";
import {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
} from "./services/UserService";

function App() {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [numberOfUsers, setNumberOfUsers] = useState(0);

  const fetchAllUsers = () => {
    getAllUsers().then((users) => {
      setUsers(users);
      setNumberOfUsers(users.length);
    });
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const onChangeForm = (e) => {
    e.persist();
    setUser((prevState) => ({
      ...prevState,
      [e.target?.name]: e.target?.value,
    }));
  };

  const userCreate = async () => {
    console.log(
      user?.userId !== undefined ? "---Update user---" : "---Add user---"
    );
    user?.userId !== undefined
      ? await updateUser(user)
      : await createUser(user);
    setNumberOfUsers(numberOfUsers + 1);
    fetchAllUsers();
    setUser({});
  };

  const editUser = (user, inx) => {
    setUser((prevState) => ({
      ...prevState,
      ...user,
      userId: inx,
    }));
  };

  const delUser = async (inx) => {
    const res = window.confirm("Do you want to delete user?");
    if (res) {
      await deleteUser(inx);
      fetchAllUsers();
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container mrgnbtm">
        <div className="row">
          <div className="col-md-8">
            <CreateUser
              user={user}
              onChangeForm={onChangeForm}
              createUser={userCreate}
            />
          </div>
          <div className="col-md-4">
            <DisplayBoard
              numberOfUsers={numberOfUsers}
              getAllUsers={fetchAllUsers}
            />
          </div>
        </div>
      </div>
      <div className="row mrgnbtm">
        <Users users={users} editUser={editUser} delUser={delUser} />
      </div>
    </div>
  );
}

export default App;
