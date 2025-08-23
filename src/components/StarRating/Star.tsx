import { FaRegStar, FaStar } from "react-icons/fa";

interface StarIconProps {
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
}

const StarIcon = ({ filled, onClick, onMouseEnter }: StarIconProps) => {
  const StarComponent = filled ? FaStar : FaRegStar;
  
  return (
    <StarComponent
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`transition-all duration-200 cursor-pointer ${
        filled ? "text-amber-500 scale-110" : "text-gray-400"
      }`}
      aria-label="Rate"
    />
  );
};

export default StarIcon;
