import { FaRegStar, FaStar } from "react-icons/fa";

interface StarIconProps {
  filled: boolean;
  hovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const StarIcon = ({ filled, hovered, onClick, onMouseEnter, onMouseLeave }: StarIconProps) => {
  const StarComponent = filled || hovered ? FaStar : FaRegStar;
  
  return (
    <StarComponent
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`transition-all duration-200 cursor-pointer ${
        filled || hovered ? "text-amber-500 scale-110" : "text-gray-400"
      }`}
      aria-label="Rate"
      role="button"
    />
  );
};

export default StarIcon;
