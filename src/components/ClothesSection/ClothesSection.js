import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  onSelectCard,
  onCardDelete,
  onAddItem,
  onCreateModal,
  clothingItems,
  currentUser,
}) => {
  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );
  return (
    <div className="clothesSection">
      <div className="clothesSection__items">
        {userClothingItems?.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onAddItem={onAddItem}
            onSelectCard={onSelectCard}
            onCardDelete={onCardDelete}
            onCreateModal={onCreateModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
