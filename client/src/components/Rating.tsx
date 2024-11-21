import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const Stars = () => {
  const [rating, setRating] = useState<number>(0);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div>
      <Rating onClick={handleRating} initialValue={rating} />
    </div>
  );
};

export default Stars;
