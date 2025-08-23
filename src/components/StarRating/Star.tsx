import { FaRegStar, FaStar } from "react-icons/fa";

interface StarIconProps {
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  readonly: boolean;
  disabled?: boolean;
}

const StarIcon = ({ filled, onClick, onMouseEnter, readonly,disabled }: StarIconProps) => {
  const StarComponent = filled ? FaStar : FaRegStar;

  return (
    <button aria-label="star icon" className={`${disabled && 'opacity-50'}`}  disabled={readonly||disabled}>
      <StarComponent
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`transition-transform duration-200 cursor-pointer  ${!readonly && 'hover:scale-125'} ${
          filled ? "text-amber-500 scale-110" : "text-gray-400"
        }`}
        aria-label="Rate"
        size={24}
      />
    </button>
  );
};

export default StarIcon;
