import React from "react";
import StarIcon from "./Star";

interface StarRatingProps {
  numberOfStar: number;
}

const StarRating: React.FC<StarRatingProps> = ({ numberOfStar = 5 }) => {

  return (
    <div className="flex gap-2">
      {Array(numberOfStar)
        .fill("")
        .map((_, index) => (
         <StarIcon key={index}/>
        ))}
    </div>
  );
};

export default StarRating;
