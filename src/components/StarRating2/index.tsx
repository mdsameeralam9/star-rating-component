import React, { useState } from 'react';
import StarRating2 from './StarHalf';

function App2() {
  const [rating1, setRating1] = useState<number>(3.5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Interactive Rating */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Rating</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rate this product (Half-star precision)
                </label>
                <StarRating2
                  rating={rating1}
                  onRatingChange={setRating1}
                  showValue
                  precision={0.5}
                  size="lg"
                />
              </div>
              <p className="text-sm text-gray-600">
                Current rating: <span className="font-semibold">{rating1}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App2;