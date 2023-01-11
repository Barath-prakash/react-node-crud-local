import React from "react";

export const Users = ({ users, editUser, delUser }) => {
  if (users.length === 0) return null;

  const UserRow = (user, index) => {
    return (
      <tr key={index} className={index % 2 === 0 ? "odd" : "even"}>
        <td>{index + 1}</td>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>
          <button
            className="btn btn-info"
            onClick={() => editUser(user, index)}
          >
            Edit
          </button>
          <button
            className="ml-1 btn btn-danger"
            onClick={() => delUser(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  };

  const userTable = users.map((user, index) => UserRow(user, index));

  return (
    <div className="container">
      <h3 className="mb-3">Users</h3>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{userTable}</tbody>
      </table>
    </div>
  );
};
