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

  return (
    <div className="clothesSection">
      <div className="clothesSection__items">
        {clothingItems?.map((item) => (
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
