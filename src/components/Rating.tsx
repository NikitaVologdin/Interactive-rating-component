import { useContext } from "react";
import { ratingContext } from "../store/ratingContext";

interface props {
  amount: number;
}

export default function RatingSelector({ amount }: props) {
  const ctx = useContext(ratingContext);
  let index = 0;

  function clickHandler(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    const rating = +event.currentTarget.innerText;
    ctx.onSetRating(rating);
  }

  function isButtonSelected(rating: number | null, index: number) {
    if (rating === index) return "selected";
    return "";
  }

  return (
    <div className="rate__rating rating">
      {Array.from({ length: amount }, () => {
        index++;
        return (
          <button
            className={`rating__selector ${isButtonSelected(
              ctx.rating,
              index
            )}`}
            onClick={clickHandler}
            key={index}
          >
            {index}
          </button>
        );
      })}
    </div>
  );
}
