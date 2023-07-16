import React, { useState } from "react";
import "../components/form.css";
import Card from "./Card.js";

function Form() {
  const [cardholderName, setCardholderName] = useState("");
  const [cardholderNameError, setCardholderNameError] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");

  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationMonthError, setExpirationMonthError] = useState("");

  const [expirationYear, setExpirationYear] = useState("");
  const [expirationYearError, setExpirationYearError] = useState("");

  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");

  const [formData, setFormData] = useState(null);


  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (cardholderName.trim() === "" && cardNumber.trim() === "") {
      setCardholderNameError("Please enter the cardholder name.");
    } else {
      setCardholderNameError("");
    }
  
    if (cardNumber.trim() === "") {
      setCardNumberError("Please enter the Card Number.");
    } else {
      setCardNumberError("");
    }
  
    if (expirationMonth.trim() === "") {
      setExpirationMonthError("Please enter the expiration month.");
    } else {
      setExpirationMonthError("");
    }
  
    if (expirationYear.trim() === "") {
      setExpirationYearError("Please enter the expiration year.");
    } else {
      setExpirationYearError("");
    }
  
    if (cvc.trim() === "") {
      setCvcError("Please enter the CVC number.");
    } else {
      setCvcError("");
    }

   
    const formData = {
      cardholderName,
      cardNumber,
      expirationMonth,
      expirationYear,
      cvc,
    };

    setFormData(formData);
    setCardholderName("");
    setCardNumber("");
    setExpirationMonth("");
    setExpirationYear("");
    setCvc("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <label>CARDHOLDER NAME:</label>
        <input
          type="text"
          name="cardHolderName"
          placeholder="e.g Jane Applessed"
          value={cardholderName}
          onChange={(event) => setCardholderName(event.target.value)}
        />
        {<h5>{cardholderNameError}</h5>}

        <label>CARD NUMBER:</label>
        <input
          type="text"
          placeholder="e.g 1234 5678 0123 0000"
          value={cardNumber}
          maxLength={16} 
          onChange={(event) => setCardNumber(event.target.value)}
        
        />

        {<h5>{cardNumberError}</h5>}
        <div className="align">
          <label>EXP.DATE(MM/YY)</label>
          <input
            type="text"
            placeholder="MM"
            maxLength={2}
            value={expirationMonth}
            onChange={(event) => setExpirationMonth(event.target.value)}
          />
          {<h5>{expirationMonthError}</h5>}
          <br></br>
          <input
            type="text"
            placeholder="YY"
            minLength={2}
            maxLength={2}
            value={expirationYear}
            onChange={(event) => setExpirationYear(event.target.value)}
          />
          {<h5>{expirationYearError}</h5>}
        </div>
        <label>CVC</label>
        <input
          type="text"
          maxLength={3}
          minLength={3}
          placeholder="e.g 123"
          value={cvc}
          onChange={(event) => setCvc(event.target.value)}
        />
        {<h5>{cvcError}</h5>}

        <button type="submit">CONFIRM</button>
      </form>
      {formData && (
        <Card
          cardholderName={formData.cardholderName}
          cardNumber={formData.cardNumber}
          expirationMonth={formData.expirationMonth}
          expirationYear={formData.expirationYear}
          cvc={formData.cvc}
        />
      )}
      {!formData && (
        <Card
          cardholderName=""
          cardNumber=""
          expirationMonth=""
          expirationYear=""
          cvc=""
        />
      )}
    </>
  );
}
export default Form;