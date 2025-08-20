import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const StarIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <FaRegStar
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`transition-transform duration-200 cursor-pointer ${
        hovered ? "text-amber-500 scale-125" : "text-gray-400"
      }`}
      aria-label="Rate"
      role="img"
    />
  );
};

export default StarIcon;
