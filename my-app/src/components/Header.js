import React from "react";

export const Header = () => {
  const headerStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "white",
    textAlign: "center",
  };

  return (
    <div style={headerStyle} className="shadow">
      <h4>React + Node CRUD</h4>
    </div>
  );
};
