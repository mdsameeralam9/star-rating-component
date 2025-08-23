import { useState } from "react";
import StarRating from "./components/StarRating";

function App() {
  const [currentRating, setCurrentRating] = useState(3);

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen gap-4">
      <div className="controlled">
        <p className="">Controlled</p>
        <StarRating
          initialRating={currentRating}
          onRatingChange={setCurrentRating}
        />
      </div>

      <div className="norating">
        <p className="">No rating</p>
        <StarRating initialRating={-1} onRatingChange={setCurrentRating} />
      </div>

      <div className="ReadOnly">
        <p className="">ReadOnly</p>
        <StarRating initialRating={3} onRatingChange={setCurrentRating} readonly={true}/>
      </div>

      <div className="Disabled">
        <p className="">Disabled</p>
        <StarRating initialRating={2} onRatingChange={setCurrentRating} disabled={true}/>
      </div>
    </div>
  );
}

export default App;
