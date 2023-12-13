import { useState } from "react";
import "./App.css";

function App() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");

  return (
    <div className="app">
      <div class="card credit-card">
        <div class="credit-card__logo">
          <img src="/credit-card.svg" />
        </div>
        <div class="credit-card__number">
          {cardNumber || "#### #### #### ####"}
        </div>

        <div class="credit-card__info">
          <div class="credit-card__info_name">
            <div class="credit-card__info_label">Card Holder</div>
            <div class="credit-card__info_value">
              {cardHolder || "Your name"}
            </div>
          </div>
          <div class="credit-card__info_expiry">
            <div class="credit-card__info_label">Expires</div>
            <div class="credit-card__info_value">{cardExpiry || "MM/YY"}</div>
          </div>
        </div>
      </div>

      <form class="card">
        <div class="form__group">
          <label for="card-number">Card Number</label>
          <input
            maxLength={16}
            onChange={(e) => {
              let value = e.target.value;

              value = value.padEnd(16, "#");

              // add space after every 4 characters
              value = value.replace(/(.{4})/g, "$1 ");

              setCardNumber(value);
            }}
            type="text"
            id="card-number"
          />
        </div>

        <div class="form__group">
          <label for="card-holder">Card Holder</label>
          <input
            onChange={(e) => setCardHolder(e.target.value)}
            type="text"
            id="card-holder"
          />
        </div>

        <div class="form__group">
          <label for="card-expiry">Card Expiry</label>
          <input
            maxLength={4}
            onChange={(e) => {
              const value = e.target.value.replace(/(..)(?!$)/, "$1/");
              setCardExpiry(value);
            }}
            type="text"
            id="card-expiry"
          />
        </div>
      </form>
    </div>
  );
}

export default App;
