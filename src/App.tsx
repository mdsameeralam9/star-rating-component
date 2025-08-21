import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <StarRating onRatingChange={setCurrentRating} />
      <p className="text-lg text-gray-700">
        {currentRating > 0 ? `You rated: ${currentRating} star${currentRating > 1 ? 's' : ''}` : 'Click to rate'}
      </p>
    </div>
  );
}

export default App;
