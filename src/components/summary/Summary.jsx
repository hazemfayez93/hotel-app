import { useState } from "react";
import "./Summary.scss";

const Summary = ({ checkout }) => {
  const [active, setActive] = useState(false);
  const [disable, setDisable] = useState(false);

  const handleSubmit = () => {
    setActive(true);
    setDisable(true);
  };

  const totalPrice = checkout.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);

  return (
    <div className="summary">
      <div className="summary-total-price">
        <div className="summary-total">
          <div className="summary-total-title">
            <span className="summary-total-title-text">Total:</span>
          </div>
          <div className="summary-total-price">
            <span className="summary-total-price-text">${totalPrice}</span>
          </div>
        </div>
        <button
          disabled={disable}
          onClick={handleSubmit}
          className="summary-submit"
        >
          <span class="summary-submit-text">
            {active ? "Booked Successfully" : "Pay Now"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Summary;
