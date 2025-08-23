import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(-1);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <StarRating initialRating={currentRating} onRatingChange={setCurrentRating} />
    </div>
  );
}

export default App;
