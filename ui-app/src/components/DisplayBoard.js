import React from "react";

export const DisplayBoard = (props) => {
  const { numberOfUsers, getAllUsers } = props;
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid lightgrey",
        borderRadius: 5,
      }}
      className="display-board"
    >
      <h4 style={{ color: "black" }}>Users Created</h4>
      <div className="number">{numberOfUsers}</div>
    </div>
  );
};
