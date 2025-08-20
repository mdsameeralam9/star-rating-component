import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

interface StarRatingProps{
  numberOfStar: number;
}

const StarRating:React.FC<StarRatingProps> = ({ numberOfStar=5 }) => {
  return (
    <div className='flex gap-2'>
      {Array(numberOfStar).fill('').map((_, index) => (
        <span className='cursor-pointer'><FaStar size={24} color="#f59e0b"/></span>
      ))}
    </div>
  )
}

export default StarRating