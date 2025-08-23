import React, { useMemo, useState } from "react";
import StarIcon from "./Star";

interface StarRatingProps {
  numberOfStar?: number;
  onRatingChange?: (rating: number) => void;
  initialRating?: number;
  readonly?: boolean;
}

type hoveredRating = number | null;

const StarRating: React.FC<StarRatingProps> = ({
  numberOfStar = 5,
  onRatingChange,
  initialRating,
  readonly=true
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hoveredRating, setHoveredRating] = useState<hoveredRating>(null);

  // start array
  const stars = useMemo(() => {
    return Array.from({ length: numberOfStar }, (_, index) => index);
  }, [numberOfStar]);


  const handleStarClick = (starIndex: number) => {
    if(readonly) return;
    setRating(starIndex);
    onRatingChange?.(starIndex);
  };

  const handleStarHover = (starIndex: number) => {
    if(readonly) return;
    setHoveredRating(starIndex);
  };

  const handleMouseLeave = () => {
    if(readonly) return;
    setHoveredRating(null);
  };

  const isActiveStar = hoveredRating ?? rating;

  return (
    <div
      className="flex gap-1"
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating (0 to ${numberOfStar})`}
      tabIndex={0}
    >
      {stars.map((value, index) => (
        <StarIcon
          key={`start-${value}`}
          filled={isActiveStar! >= index}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          readonly={readonly}
        />
      ))}
    </div>
  );
};

export default StarRating;
