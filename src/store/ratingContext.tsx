import { createContext, useState, PropsWithChildren } from "react";

type ratingState = null | number;

interface RatingContextValue {
  rating: ratingState;
  // onSetRating: () => Dispatch<SetStateAction<ratingState>>;
  isSubmitted: boolean;
  onSubmit: (value: boolean) => void;
  onSetRating: (rating: number) => void;
  maxRating: number;
}
export const ratingContext = createContext<RatingContextValue>({
  rating: null,
  isSubmitted: false,
  onSubmit: () => {},
  onSetRating: () => {},
  maxRating: 5,
});

export default function RatingProvider({ children }: PropsWithChildren) {
  const [rating, setRating] = useState<ratingState>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const maxRating = 5;
  return (
    <ratingContext.Provider
      value={{
        rating,
        onSetRating: setRating,
        isSubmitted,
        onSubmit: setIsSubmitted,
        maxRating,
      }}
    >
      {children}
    </ratingContext.Provider>
  );
}
