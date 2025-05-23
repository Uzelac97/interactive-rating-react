import "./RatingCard.css";
import iconStar from "../assets/images/icon-star.svg";

function RatingCard({ onSelect, onSubmit, selected }) {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <div className="rating-card">
      <img className="icon" src={iconStar} alt="icon-star" />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul className="rating-list">
        {ratings.map((rating) => (
          <li key={rating}>
            <button
              type="button"
              className={selected === rating ? "selected" : ""}
              onClick={() => onSelect(rating)}
            >
              {rating}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="submit-btn" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}
export default RatingCard;
