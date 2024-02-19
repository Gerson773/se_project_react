import React, { useState } from "react";
import "./ItemCard.css";
import likeIcon from "../../../src/images/likeIcon.svg";
import isLikedIcon from "../../../src/images/islikedicon.svg";

const ItemCard = ({ item, onSelectCard, onCardLike, currentUser }) => {
  const [liked, setLiked] = useState(
    (item.likes ?? []).some((id) => id === currentUser._id)
  );

  const handleLike = () => {
    setLiked(!liked);
    onCardLike({ id: item._id, isLiked: !liked });
  };

  const itemLikeButtonClassName = liked ? "liked" : "not-liked";

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
      <div
        className={`card__like-icon ${itemLikeButtonClassName}`}
        onClick={handleLike}
      >
        {liked ? (
          <img src={isLikedIcon} alt="Liked Heart Icon" />
        ) : (
          <img src={likeIcon} alt="Default Heart Icon" />
        )}
      </div>
    </div>
  );
};

export default ItemCard;
