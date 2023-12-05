import React from "react";
import Avatar from "../../images/avatar.svg";
import "./Sidebar.css";

const Sidebar = () => (
  <div className="sidebar">
    <img
      src={Avatar}
      alt="avatar__sidebar-logo"
      className="avatar__sidebar-logo"
    />
    <p className="sidebar__avatar-name">Gerson G</p>
  </div>
);

export default Sidebar;
