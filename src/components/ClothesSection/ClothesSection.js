import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ClothesSection = ({
  onSelectCard,
  onCardDelete,
  onAddItem,
  onCreateModal,
  clothingItems,
}) => {
  const currentUser = useContext(CurrentUserContext);

  const userClothingItems = clothingItems.filter(
    (item) => item.owner === currentUser._id
  );

  return (
    <div className="clothesSection">
      <div className="clothesSection__items">
        {userClothingItems?.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onAddItem={onAddItem}
              onSelectCard={onSelectCard}
              onCardDelete={onCardDelete}
              onCreateModal={onCreateModal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
