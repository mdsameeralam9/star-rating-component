import { FaRegStar, FaStar } from "react-icons/fa";

interface StarIconProps {
  filled: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  readonly: boolean;
  disabled?: boolean;
  size?: number;
}

const StarIcon = ({
  filled,
  onClick,
  onMouseEnter,
  readonly,
  disabled,
  size
}: StarIconProps) => {
  const StarComponent = filled ? FaStar : FaRegStar;

  return (
    <button
      aria-label="star icon"
      className={`${disabled && "opacity-50"}`}
      disabled={disabled}
    >
      <StarComponent
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`transition-transform duration-200  ${
          !readonly && !disabled && "cursor-pointer hover:scale-125"
        } ${filled ? "text-amber-500 scale-110" : "text-gray-400"}`}
        aria-label="Rate"
        size={size}
      />
    </button>
  );
};

export default StarIcon;
