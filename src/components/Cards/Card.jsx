import "./Card.css";

export default function Card({ item, count, increment, decrement }) {


  return (
    <div className="Card">
      <img src={item.image.desktop} alt={item.name} />
      <div className="button">
        <span className="hidden">Add To Cart</span>
        <div className="select">
          <p className="fullRadius" onClick={decrement}>-</p>
          <p>{count}</p>
          <p className="fullRadius" onClick={increment}>+</p>
        </div>
      </div>
      <span>{item.category}</span>
      <h2>{item.name}</h2>
      <span>{`$${item.price.toFixed(2)}`}</span>
      
    </div>
  );
}

