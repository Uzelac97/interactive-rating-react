import "./ThankYouCard.css";
import ThankYouImg from "../assets/images/illustration-thank-you.svg";

function ThankYouCard({ selected }) {
  return (
    <div className="thank-you-card">
      <img
        className="thank-you-img"
        src={ThankYouImg}
        alt="illustration-thank-you"
      />
      <span>You selected {selected} out of 5</span>
      <h2>Thank you!</h2>
      <p className="thank-you-message">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYouCard;
