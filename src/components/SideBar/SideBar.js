import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../../images/avatar.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const SideBar = ({ onSignout, onEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);
  const Avatar = currentUser ? currentUser.avatar : null;
  const Name = currentUser ? currentUser.name : null;
  const history = useHistory();

  const signOutUser = () => {
    localStorage.removeItem("jwt");
    onSignout();
    history.push("/");
  };

  const displayAvatar = Avatar !== null && Avatar !== "";

  return (
    <div className="sidebar">
      <div className="sidebar__container-profile">
        {displayAvatar ? (
          <img src={Avatar} alt="Avatar" className="avatar__sidebar-logo" />
        ) : (
          <p className="sidebar__avatar-placeholder">
            <UserPlaceHolder />
          </p>
        )}
        <p className="sidebar__avatar-name">{Name}</p>
      </div>
      <div className="sidebar__container-buttons">
        <button
          className="sidebar__profile-data-btn"
          type="button"
          onClick={onEditProfile}
        >
          Change profile data
        </button>
        <button
          className="sidebar__logout-btn"
          type="button"
          onClick={signOutUser}
        >
          Log out
        </button>
      </div>
    </div>
  );
};
export default SideBar;
