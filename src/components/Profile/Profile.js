import React from "react";
import "./Profile.css";
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";

const Profile = ({
  clothingItems,
  onSelectCard,
  onCardDelete,
  onCreateModal,
  onAddItem,
}) => {
  return (
    <section className="profile">
      <SideBar />

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
  );
};

export default Profile;
