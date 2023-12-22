import React from "react";
import Link from "next/link";

const DropDownMenu = (props) => {
  return (
    <div className="dropdown-menu">
      <ul className="dropdown-list">
        {props.menuitems.map((item) => (
          <li>
            <Link href={"#"}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
