import { useState } from "react";
import StarRating from "./components/StarRating";
import App2 from "./components/StarRating2";


function App() {
  const [currentRating, setCurrentRating] = useState(3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Star Rating Component
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A fully-featured star rating component with full and half-star
            functionality, hover effects, and customizable options.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2 w-screen gap-4">
          <div className="flex justify-center flex-col items-center w-50 h-20  rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.2)]">
            <p className="">Rating</p>
            <StarRating
              initialRating={currentRating}
              onRatingChange={setCurrentRating}
            />
          </div>

          <div className="flex justify-center flex-col items-center w-50 h-20  rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.2)]">
            <p className="">No rating</p>
            <StarRating initialRating={-1} onRatingChange={setCurrentRating} />
          </div>

          <div className="flex justify-center flex-col items-center w-50 h-20  rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.2)]">
            <p className="">ReadOnly</p>
            <StarRating
              initialRating={3}
              onRatingChange={setCurrentRating}
              readonly={true}
            />
          </div>

          <div className="flex justify-center flex-col items-center w-50 h-20  rounded-lg shadow-[0_0_4px_2px_rgba(0,0,0,0.2)]">
            <p className="">Disabled</p>
            <StarRating
              initialRating={2}
              onRatingChange={setCurrentRating}
              disabled={true}
            />
          </div>
        </div>

        <div className="halfRating flex justify-center items-center my-4">
          <p className="">Half Rating</p>
        </div>

        <App2 />


        {/* Features List */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Component Features</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Full and half-star rating support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Interactive hover effects
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Configurable precision (0.5 or 1)
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Multiple sizes in px
              </li>
            </ul>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Readonly mode for display
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Optional value display
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                TypeScript support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                Fully customizable styling
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
