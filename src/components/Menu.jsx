import React, { useState } from "react";

const Menu = ({ value }) => {
  const [isClicked, setIsClicked] = useState(false);

  const infoClassName = isClicked
    ? "categories-menu-item-info menu-item-clicked"
    : "categories-menu-item-info";

  const { title, icon } = value;
  return (
    <div
      className="categories-menu-item"
      onClick={() => {
        setIsClicked(!isClicked);
      }}
    >
      <div className={infoClassName}>
        <img
          src={icon}
          height="32px"
          width="32px"
          style={{ marginBottom: "5px" }}
        />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Menu;
