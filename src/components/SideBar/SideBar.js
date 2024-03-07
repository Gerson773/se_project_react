import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Avatar from "../../images/avatar.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import UserPlaceHolder from "../UserPlaceHolder/UserPlaceHolder";

const SideBar = ({ handleSignout, onEditProfile }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);
  const avatar = currentUser ? currentUser.avatar : null;
  const name = currentUser ? currentUser.name : null;
  const history = useHistory();

  const displayAvatar = Avatar !== null && Avatar !== "";

  return (
    <div>
      {loggedIn && (
        <div className="sidebar">
          <div className="sidebar__container-profile">
            {displayAvatar && (
              <img src={avatar} alt="Avatar" className="avatar__sidebar-logo" />
            )}
            <p className="sidebar__avatar-name">{name}</p>
          </div>
          <div className="sidebar__container-buttons">
            <button
              className="change__profile-data-btn"
              type="button"
              onClick={onEditProfile}
            >
              Change profile data
            </button>

            <button
              className="sidebar__logout-btn"
              type="button"
              onClick={handleSignout}
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;
