import { useContext } from "react";
import { ratingContext } from "./store/ratingContext";
import Rate from "./components/sections/Rate";
import Result from "./components/sections/Result";

function App() {
  const ctx = useContext(ratingContext);

  const content = ctx.isSubmitted ? <Result /> : <Rate />;
  return content;
}

export default App;
