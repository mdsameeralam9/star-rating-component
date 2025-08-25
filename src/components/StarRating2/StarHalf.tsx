import React, { useState, useCallback } from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
  showValue?: boolean;
  precision?: 0.5 | 1;
  className?: string;
}

const StarRating2: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 'md',
  readonly = false,
  onRatingChange,
  showValue = false,
  precision = 0.5,
  className = ''
}) => {
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [hoverPosition, setHoverPosition] = useState<{ index: number; isHalf: boolean } | null>(null);

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-10 h-10'
  };

  const getStarFillPercentage = (starIndex: number, currentRating: number): number => {
    if (currentRating >= starIndex + 1) {
      return 100; // Full star
    } else if (currentRating > starIndex) {
      return (currentRating - starIndex) * 100; // Partial star
    }
    return 0; // Empty star
  };

  const handleMouseMove = useCallback((e: React.MouseEvent, starIndex: number) => {
    if (readonly) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const isHalf = x < width / 2;
    
    setHoverPosition({ index: starIndex, isHalf });
    
    if (precision === 0.5) {
      setHoverRating(starIndex + (isHalf ? 0.5 : 1));
    } else {
      setHoverRating(starIndex + 1);
    }
  }, [readonly, precision]);

  const handleMouseLeave = useCallback(() => {
    if (readonly) return;
    setHoverRating(0);
    setHoverPosition(null);
  }, [readonly]);

  const handleClick = useCallback((starIndex: number) => {
    if (readonly || !onRatingChange) return;

    let newRating;
    if (precision === 0.5 && hoverPosition) {
      newRating = starIndex + (hoverPosition.isHalf ? 0.5 : 1);
    } else {
      newRating = starIndex + 1;
    }
    
    onRatingChange(newRating);
  }, [readonly, onRatingChange, precision, hoverPosition]);

  const displayRating = hoverRating > 0 ? hoverRating : rating;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, index) => {
          const fillPercentage = getStarFillPercentage(index, displayRating);
          const isHovered = !readonly && hoverPosition?.index === index;
          
          return (
            <div
              key={index}
              className={`relative ${readonly ? '' : 'cursor-pointer'} transition-transform duration-150 ${isHovered ? 'scale-110' : ''}`}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              {/* Background star (empty) */}
              <Star
                className={`${sizeClasses[size]} text-gray-300 transition-colors duration-150`}
                fill="currentColor"
              />
              
              {/* Foreground star (filled) */}
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-150"
                style={{ width: `${fillPercentage}%` }}
              >
                <Star
                  className={`${sizeClasses[size]} ${
                    hoverRating > 0 
                      ? 'text-amber-400' 
                      : 'text-amber-500'
                  } transition-colors duration-150`}
                  fill="currentColor"
                />
              </div>
            </div>
          );
        })}
      </div>
      
      {showValue && (
        <span className="ml-2 text-sm font-medium text-gray-700">
          {displayRating.toFixed(precision === 0.5 ? 1 : 0)} / {maxRating}
        </span>
      )}
    </div>
  );
};

export default StarRating2;