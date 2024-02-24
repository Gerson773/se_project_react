import React, { useContext } from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import PropTypes from "prop-types";

SideBar.propTypes = {
  handleEditProfileModal: PropTypes.func.isRequired,
};

const Profile = ({
  clothingItems,
  onSelectCard,
  onCardDelete,
  onCreateModal,
  onAddItem,
  handleSignout,
  onEditProfile,
}) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      {loggedIn && (
        <section className="profile">
          <SideBar
            onEditProfile={onEditProfile}
            handleSignout={handleSignout}
          />

          <div className="profile__container">
            <div>
              <div className="profile__header">
                <div>Your Items</div>
                <button
                  onClick={onCreateModal}
                  type="text"
                  className="profile__button-add"
                >
                  + Add New
                </button>
              </div>
            </div>

            <ClothesSection
              clothingItems={clothingItems}
              onSelectCard={onSelectCard}
              onCardDelete={onCardDelete}
              onAddItem={onAddItem}
              onCreateModal={onCreateModal}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
