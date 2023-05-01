import React from "react";

const Menu = ({ value }) => {
  console.log(value);
  const { id, title, icon } = value;
  return (
    <div
      style={{
        display: "flex",
        height: "75px",
        width: "75px",
        textAlign: "center",
        borderRadius: "5px",
        padding: "5px",
        border: "1px solid black",
      }}
    >
      <div
        style={{ backgroundColor: "white", padding: "1%", borderRadius: "5px" }}
      >
        <img
          src={value.icon}
          height="40px"
          width="40px"
          style={{ marginBottom: "5px" }}
        />
        <p style={{ color: "black" }}>{value.title}</p>
      </div>
    </div>
  );
};

export default Menu;
