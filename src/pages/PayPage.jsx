import { Container } from "@mui/system";
import React, { useState } from "react";
import marvel from "./image/games.jpg";
import { Height } from "@mui/icons-material";
import { Box } from "@mui/material";

function PayPage() {
  <img src={marvel} />;
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationDateChange = (event) => {
    setExpirationDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting payment information...");
    // Here you would send the payment information to your payment processor
  };

  return (
    <Box className="marvel">
      <form
        style={{ width: "400px" }}
        onSubmit={handleSubmit}
        className="payment-form"
      >
        <div className="form-group">
          <label htmlFor="cardNumber" className="form-label">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate" className="form-label">
            Expiration Date
          </label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={handleExpirationDateChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv" className="form-label">
            CVV
          </label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">
          Pay Now
        </button>
      </form>
    </Box>
  );
}

export default PayPage;
