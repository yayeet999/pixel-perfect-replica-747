import React from 'react';

interface StarRatingProps {
  rating: number;
  reviewCount: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, reviewCount }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="items-center flex gap-2">
        <div className="items-center self-stretch flex gap-1 my-auto">
          {[1, 2, 3, 4, 5].map((star) => (
            <img
              key={star}
              src="https://api.builder.io/api/v1/image/assets/TEMP/da09cee2c22d50761484962e9b6dd922993bff43?placeholderIfAbsent=true"
              alt={`Star ${star}`}
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
          ))}
        </div>
      </div>
      <div className="text-white text-base font-normal">
        {rating} (from {reviewCount}+ reviews)
      </div>
    </div>
  );
};
