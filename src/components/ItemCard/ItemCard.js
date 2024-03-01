import React, { useState } from "react";
import "./ItemCard.css";
import likeIcon from "../../../src/images/likeIcon.svg";
import isLikedIcon from "../../../src/images/islikedicon.svg";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

const ItemCard = ({ item, onSelectCard, onCardLike }) => {
  const { currentUser, loggedIn } = useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = useState(
    (item.likes ?? []).some((id) => id === currentUser._id)
  );

  const handleLike = () => {
    debugger;
    setIsLiked(!isLiked);
    if (typeof onCardLike === "function") {
      onCardLike(item._id);
    }
  };

  const itemLikeButtonClassName = isLiked ? "liked" : "not-liked";

  return (
    <div className="card__container">
      <div>
        <img
          src={item.link || item.imageUrl}
          className="card__image"
          onClick={() => onSelectCard(item)}
          alt={item.name}
        />
      </div>
      <div className="card__name">{item.name}</div>
      {loggedIn && (
        <div
          className={`card__like-icon ${itemLikeButtonClassName}`}
          onClick={handleLike}
        >
          {isLiked ? (
            <img src={isLikedIcon} alt="Liked Heart Icon" />
          ) : (
            <img src={likeIcon} alt="Default Heart Icon" />
          )}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
