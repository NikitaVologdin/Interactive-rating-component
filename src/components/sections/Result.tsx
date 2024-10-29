import { useContext } from "react";
import { ratingContext } from "../../store/ratingContext";

export default function Result() {
  const ctx = useContext(ratingContext);
  return (
    <section className="result">
      <img
        src="/images/illustration-thank-you.svg"
        alt=""
        className="result__img"
        width={144}
        height={96}
      />
      <div className="result__rating">
        {`You selected ${ctx.rating} of ${ctx.maxRating}`}
      </div>
      <h2 className="result__title">Thank you!</h2>
      <p className="result__paragraph">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </section>
  );
}
