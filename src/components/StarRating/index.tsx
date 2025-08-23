import React, { useState } from "react";
import StarIcon from "./Star";

interface StarRatingProps {
  numberOfStar?: number;
  onRatingChange?: (rating: number) => void;
  initialRating?: number;
}

type hoveredRating = number | null;

const StarRating: React.FC<StarRatingProps> = ({ 
  numberOfStar = 5, 
  onRatingChange,
  initialRating
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState<hoveredRating>(null);

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex);
    onRatingChange?.(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    console.log(starIndex)
    setHoveredRating(starIndex);
  };

  const handleMouseLeave = () => {
    setHoveredRating(null);
  };

  const isActiveStar = hoveredRating ?? rating;

  return (
    <div className="flex gap-1" onMouseLeave={handleMouseLeave}>
      {Array(numberOfStar)
        .fill("")
        .map((_, index) => (
          <StarIcon 
            key={index}
            filled={isActiveStar >= index}
            onClick={() => handleStarClick(index)}
            onMouseEnter={() => handleStarHover(index)}
          />
        ))}
    </div>
  );
};

export default StarRating;
