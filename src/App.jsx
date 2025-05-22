import { useState } from "react";
import "./App.css";
import RatingCard from "./components/RatingCard";
import ThankYouCard from "./components/ThankYouCard";

function App() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  function handleSelect(rating) {
    setSelected(rating);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (selected !== null) {
      setSubmitted(true);
    } else {
      alert("Please select a rating before submitting.");
    }
  }

  return (
    <>
      {!submitted ? (
        <RatingCard
          selected={selected}
          onSelect={handleSelect}
          onSubmit={handleSubmit}
        />
      ) : (
        <ThankYouCard selected={selected} />
      )}
    </>
  );
}

export default App;
