const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card__container">
      <div>
        <img
          src={item.link}
          className="card__image"
          onClick={() => onSelectCard(item)}
          alt={`Thumbnail of ${item.name}`}
        />
      </div>
      <div className="card__name">{item.name}</div>
    </div>
  );
};

export default ItemCard;
