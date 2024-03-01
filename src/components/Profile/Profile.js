import React, { useContext } from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCardDelete,
  onCreateModal,
  onAddItem,
  handleSignout,
  onEditProfile,
  onCardLike,
}) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);

  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

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
              userClothingItems={userClothingItems}
              onSelectCard={onSelectCard}
              onCardDelete={onCardDelete}
              onAddItem={onAddItem}
              onCreateModal={onCreateModal}
              onCardLike={onCardLike}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default Profile;
