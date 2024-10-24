import { useState } from "react";
import data from "../data";

function Card({ id, name, info, price, image, removeTour }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 100)}.....`;
  function readmorehandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <img src={image} className="image" alt={name} />

      <div className="card-info">
        <div className="card-details">
          <h4 className="tour-price">${price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>
        <div className="description">
          {description}
          <span className="read-more" onClick={readmorehandler}>
            {readmore ? `  ShowLess` : `ReadMore`}
          </span>
        </div>
      </div>
      <button className="btn-interested" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
}

export default Card;
