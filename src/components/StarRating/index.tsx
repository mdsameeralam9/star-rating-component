import React, { useState } from "react";
import StarIcon from "./Star";

interface StarRatingProps {
  numberOfStar?: number;
  onRatingChange?: (rating: number) => void;
  initialRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  numberOfStar = 5, 
  onRatingChange,
  initialRating = 0 
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (starIndex: number) => {
    const newRating = starIndex + 1;
    setRating(newRating);
    onRatingChange?.(newRating);
  };

  const handleStarHover = (starIndex: number) => {
    setHoveredRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  return (
    <div className="flex gap-1" onMouseLeave={handleMouseLeave}>
      {Array(numberOfStar)
        .fill("")
        .map((_, index) => (
          <StarIcon 
            key={index}
            filled={index < rating}
            hovered={index < hoveredRating}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
            onMouseLeave={() => {}}
          />
        ))}
    </div>
  );
};

export default StarRating;
