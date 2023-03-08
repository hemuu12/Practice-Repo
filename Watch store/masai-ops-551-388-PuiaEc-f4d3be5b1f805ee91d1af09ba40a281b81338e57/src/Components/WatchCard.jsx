import React from "react";
import {Link} from "react-router-dom" 
const WatchCard = ({ id , image, name , category }) => {
  return (
    <div data-testid={`watch-card-wrapper`} >
      <div>
        <img data-testid="watch-card-image" width={300} src={image} alt="" />
      </div>
      <div>
        <Link data-testid="watch-name">{name}</Link>
        <Link data-testid="watch-category" to={`/watches/${id}`}>{category}</Link>
      </div>
    </div>
  );
};  

export default WatchCard;
