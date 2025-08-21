import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <StarRating onRatingChange={setCurrentRating} />
    </div>
  );
}

export default App;
