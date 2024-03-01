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
  userClothingItems,
  onCardLike,
  clothingItems,
}) => {
  return (
    <div className="clothesSection">
      <div className="clothesSection__items">
        {console.log("All items before filtering:", clothingItems)}
        {console.log("userClothingItems in ClothesSection:", userClothingItems)}

        {userClothingItems?.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              onAddItem={onAddItem}
              onSelectCard={onSelectCard}
              onCardDelete={onCardDelete}
              onCreateModal={onCreateModal}
              onCardLike={onCardLike}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClothesSection;
